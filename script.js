function toggleLocket() {
  const closed = document.querySelector('.locket-closed');
  const open = document.querySelector('.locket-open');
  const closedText = document.getElementById('locket-closed-text');
  const openText = document.getElementById('locket-open-text');

  const isClosed = closed.style.display !== 'none';

  closed.style.display = isClosed ? 'none' : 'block';
  open.style.display = isClosed ? 'block' : 'none';

  closedText.style.display = isClosed ? 'none' : 'block';
  openText.style.display = isClosed ? 'block' : 'none';
}

function updateCounter() {
  const startDate = new Date("May 05 2013");
  const today = new Date();

  const startUTC = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );

  const todayUTC = Date.UTC(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const days = Math.floor((todayUTC - startUTC) / 86400000);

  document.getElementById('days').textContent = days;
}

updateCounter();