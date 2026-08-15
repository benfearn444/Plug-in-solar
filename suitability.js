document.getElementById('suitability-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const values = new FormData(event.currentTarget);
  const result = document.getElementById('checker-result');
  const region = values.get('region');
  const position = values.get('position');
  const socket = values.get('socket');
  const battery = values.get('battery');
  let title = 'A few checks are still needed';
  let copy = 'Join the launch list and we’ll share the relevant guidance when verified products are available.';
  if (region === 'ni') {
    title = 'We need to check Northern Ireland separately';
    copy = 'The framework and network arrangements being researched here are for Great Britain. We will not present a kit as suitable for Northern Ireland without separate confirmation.';
  } else if (battery === 'battery') {
    title = 'This range is solar-only';
    copy = 'Plug-in battery systems and solar devices integrated with batteries are outside the current product scope we are screening.';
  } else if (position === 'balcony' || position === 'unknown') {
    title = 'Possible, but mounting evidence matters';
    copy = 'We’ll need a verified mounting arrangement, stability information and a suitable connection point before recommending an elevated or uncertain position.';
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
