const html = document.documentElement;

function setTheme(theme) {
  localStorage.setItem('hs_theme', theme);
  html.classList.remove('light', 'dark');
  html.classList.add(theme);

  document
    .querySelector('[data-hs-theme-click-value="dark"]')
    .classList.toggle('hidden', theme === 'dark');
  document
    .querySelector('[data-hs-theme-click-value="light"]')
    .classList.toggle('hidden', theme === 'light');
}

document
  .querySelector('[data-hs-theme-click-value="dark"]')
  .addEventListener('click', () => {
    setTheme('dark');
  });

document
  .querySelector('[data-hs-theme-click-value="light"]')
  .addEventListener('click', () => {
    setTheme('light');
  });

const savedTheme = localStorage.getItem('hs_theme') || 'light';
setTheme(savedTheme);
