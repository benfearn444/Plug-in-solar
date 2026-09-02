document.getElementById('suitability-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const result = document.getElementById('checker-result');
  const position = values.get('position');
  const socket = values.get('socket');
  const battery = values.get('battery');
  let title = 'A few checks are still needed';
  let copy = 'Join the launch list and we’ll share the relevant guidance when verified products are available.';
  if (battery === 'battery') {
    title = 'This range is solar-only';
    copy = 'Plug-in battery systems and solar devices integrated with batteries are outside the current product scope we are screening.';
  } else if (position === 'balcony') {
    title = 'This UKSOL range is not suitable for balconies';
    copy = 'The current UKSOL product data says these kits are for suitable ground-level outdoor positions. We cannot recommend a balcony installation.';
  } else if (position === 'unknown') {
    title = 'Start by checking your available space';
    copy = 'The launch range is intended for stable, accessible ground or patio positions. We will publish clearer dimensions and mounting guidance before orders open.';
  } else if (socket === 'no') {
    title = 'Start with the connection point';
    copy = 'A suitable connection point is essential. Ask a qualified electrician to assess the installation before choosing a kit.';
  } else {
    title = 'You may be a good fit for the launch range';
    copy = 'Your answers match the basic shape of a solar-only, ground-position setup. This is only an early indication — wait for a verified product listing and follow its instructions.';
  }
  result.innerHTML = `<strong>${title}</strong><span>${copy}</span>`;
  result.hidden = false;
  result.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
