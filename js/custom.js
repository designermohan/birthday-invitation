
    // === Progressive disclosure: reveal next field as previous is answered ===
    const fields = {
      overnight: document.querySelector('[data-field="overnight"]'),
      days: document.querySelector('[data-field="days"]'),
      contribution: document.querySelector('[data-field="contribution"]'),
      notes: document.querySelector('[data-field="notes"]'),
      submit: document.querySelector('[data-field="submit"]'),
    };

    function reveal(field) {
      if (field.classList.contains('is-revealed') || field.classList.contains('is-revealing')) return;
      field.classList.remove('is-hidden');
      field.classList.add('is-revealing');
      field.addEventListener('animationend', () => {
        field.classList.remove('is-revealing');
        field.classList.add('is-revealed');
      }, { once: true });
    }

    // === Tap-to-reveal options panels ===
    document.querySelectorAll('.select-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const name = trigger.dataset.trigger;
        const panel = document.querySelector(`[data-panel="${name}"]`);
        const isOpen = trigger.classList.contains('is-open');

        if (isOpen) {
          trigger.classList.remove('is-open');
          panel.classList.remove('is-open');
        } else {
          // Close other open panels
          document.querySelectorAll('.select-trigger.is-open').forEach(t => {
            t.classList.remove('is-open');
            const otherPanel = document.querySelector(`[data-panel="${t.dataset.trigger}"]`);
            if (otherPanel) otherPanel.classList.remove('is-open');
          });
          trigger.classList.add('is-open');
          panel.classList.add('is-open');
        }
      });
    });

    // === Update trigger label when option selected ===
    function updateTriggerLabel(triggerName) {
      const trigger = document.querySelector(`[data-trigger="${triggerName}"]`);
      const triggerText = trigger.querySelector('.select-trigger__text');
      const panel = document.querySelector(`[data-panel="${triggerName}"]`);
      const inputs = panel.querySelectorAll('input[type="radio"], input[type="checkbox"]');
      const checked = Array.from(inputs).filter(i => i.checked);

      if (checked.length === 0) {
        triggerText.textContent = 'Tap to select';
        trigger.classList.remove('has-value');
      } else if (checked.length === 1) {
        triggerText.textContent = checked[0].dataset.display || checked[0].value;
        trigger.classList.add('has-value');
      } else {
        triggerText.textContent = checked.map(c => c.dataset.display || c.value).join(', ');
        trigger.classList.add('has-value');
      }
    }

    // === Reveal next field as user answers ===

    // Reveal overnight after name typed (2+ chars)
    const nameInput = document.getElementById('name');
    nameInput.addEventListener('input', () => {
      if (nameInput.value.trim().length >= 2) {
        reveal(fields.overnight);
      }
    });

    // Single-select (radios) — close panel after selection, reveal next field
    document.querySelectorAll('input[name="overnight"]').forEach(input => {
      input.addEventListener('change', () => {
        updateTriggerLabel('overnight');
        setTimeout(() => {
          document.querySelector('[data-trigger="overnight"]').classList.remove('is-open');
          document.querySelector('[data-panel="overnight"]').classList.remove('is-open');
        }, 250);
        reveal(fields.days);
      });
    });

    // Multi-select (days) — keep panel open, reveal contribution after first pick
    document.querySelectorAll('input[name="days"]').forEach(input => {
      input.addEventListener('change', () => {
        updateTriggerLabel('days');
        const anyChecked = Array.from(document.querySelectorAll('input[name="days"]')).some(c => c.checked);
        if (anyChecked) reveal(fields.contribution);
      });
    });

    // Contribution radios
    document.querySelectorAll('input[name="contribution"]').forEach(input => {
      input.addEventListener('change', () => {
        updateTriggerLabel('contribution');

        const amountReveal = document.getElementById('amountReveal');
        if (input.value === 'number') {
          amountReveal.classList.add('is-visible');
        } else {
          amountReveal.classList.remove('is-visible');
        }

        // Auto-close panel for "not sure"; for "number in mind" keep open so they can type the amount
        if (input.value !== 'number') {
          setTimeout(() => {
            document.querySelector('[data-trigger="contribution"]').classList.remove('is-open');
            document.querySelector('[data-panel="contribution"]').classList.remove('is-open');
          }, 250);
        }

        reveal(fields.notes);
        reveal(fields.submit);
      });
    });

    // === Form validation: enable submit only when all required fields filled ===
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const overnight = document.querySelector('input[name="overnight"]:checked');
      const anyDay = Array.from(document.querySelectorAll('input[name="days"]')).some(c => c.checked);
      const contribution = document.querySelector('input[name="contribution"]:checked');
      const amount = document.querySelector('input[name="amount"]');

      let isValid = name.length >= 2 && overnight && anyDay && contribution;

      // If they picked "I have a number in mind", they need to enter an amount
      if (contribution && contribution.value === 'number') {
        isValid = isValid && amount.value && parseFloat(amount.value) >= 0;
      }

      submitBtn.disabled = !isValid;
    }

    // Submit
    const submitBtn = document.getElementById('submitBtn');
    document.getElementById('rsvpForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);

      submitBtn.classList.add('is-clicked');
      submitBtn.innerHTML = 'Sending <span class="submit__diamond">✦</span>';
      submitBtn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          submitBtn.innerHTML = 'Sent <span class="submit__diamond">✦</span> thank you';
        } else {
          submitBtn.innerHTML = 'Something went wrong, try again';
          submitBtn.disabled = false;
          submitBtn.classList.remove('is-clicked');
        }
      } catch (err) {
        submitBtn.innerHTML = 'Something went wrong, try again';
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-clicked');
      }
    });

    // Wire validation to all inputs
    document.querySelectorAll('input, textarea').forEach(el => {
      el.addEventListener('input', validateForm);
      el.addEventListener('change', validateForm);
    });
  
    function togCheck(el) { el.classList.toggle('selected'); }
    function toggleDays() {
      var g = document.getElementById('days-group'), b = document.getElementById('days-btn');
      if (!g || !b) return;
      var open = (g.style.display === 'flex');
      g.style.display = open ? 'none' : 'flex';
      if (!open) g.style.flexDirection = 'column';
      b.textContent = open ? 'Select all that apply â€º' : 'Select all that apply â†‘';
    }
    function toggleContrib(sel) {
      var c = document.getElementById('contrib-custom');
      if (c) c.style.display = (sel.value === 'number') ? 'block' : 'none';
    }
    function submitForm() {
      var name = document.getElementById('name-input').value.trim();
      if (!name) { document.getElementById('name-input').style.borderBottomColor = 'rgba(180,80,60,.6)'; document.getElementById('name-input').focus(); return; }
      var stay = document.getElementById('stay-select') ? document.getElementById('stay-select').value : '';
      var contribSel = document.getElementById('contrib-select'); var contribAmt = document.getElementById('contrib-amount'); var contrib = ''; if (contribSel) { if (contribSel.value === 'number' && contribAmt && contribAmt.value.trim()) { contrib = contribAmt.value.trim(); } else if (contribSel.value === 'flexible') { contrib = 'Flexible'; } else { contrib = '(not specified)'; } }
      var days = []; document.querySelectorAll('#days-group .check-opt.selected span').forEach(function (el) { days.push(el.textContent.trim()); });
      var body = 'Name: ' + name + '%0AStaying overnight: ' + stay + '%0ADays: ' + (days.join(', ') || '(none selected)') + '%0AContribution: ' + contrib;
      window.location.href = 'mailto:samanthagabrielal@gmail.com?subject=Sasa%27s+30th+%E2%80%94+RSVP+from+' + encodeURIComponent(name) + '&body=' + body;
      var btn = document.querySelector('.form-btn'); if (btn) { btn.textContent = 'email drafted, now click send!'; btn.style.background = '#4a6a30'; btn.disabled = true; }
    }