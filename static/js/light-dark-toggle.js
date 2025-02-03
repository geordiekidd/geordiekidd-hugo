//function currentlyPrefersDark() {
//  const savedScheme = window.localStorage.getItem('colorscheme');
//  if (savedScheme != null) {
//    return savedScheme === 'dark';
//  };
//  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
//};
//
//function updateScheme() {
//  if (currentlyPrefersDark()) {
//    document.body.classList.add('dark');
//    document.body.classList.remove('light')
//  } else {
//    document.body.classList.add('light')
//    document.body.classList.remove('dark');
//  };
//};
//updateScheme();
//
//document.querySelector('.light-dark-toggle').appendChild((() => {
//  const b = document.createElement('a');
//  b.textContent = 'light/dark';
//  b.style.opacity = '50%';
//  b.addEventListener('click', () => {
//    window.localStorage.setItem(
//      'colorscheme',
//      currentlyPrefersDark() ? 'light' : 'dark',
//    );
//    updateScheme();
//  });
//  return b;
//})());
