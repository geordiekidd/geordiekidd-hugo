// updates header based on which item is displayed
document.addEventListener('change', (event) => {
  if (event.target.matches('input[name="collapsible"]:checked')) {
    const filename = event.target.dataset.filename;
    document.getElementById('current-filename').textContent = `$ cat ${filename}.md`;
  }
});

function menuOpenClose() {
  const menu = document.getElementById('shelf-menu');
  menu.classList.toggle('open');
};

document.querySelectorAll(".dropcap-small a").forEach(link => {
  link.addEventListener("click", event => {
    menuOpenClose();
  });
});
