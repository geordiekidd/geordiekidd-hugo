const updateHeader = () => {
  const targetId = location.hash.slice(1);
  const targetSection = targetId ? document.getElementById(targetId) : null;

  if (targetId && targetSection && targetSection.dataset.filename) {
    document.getElementById("current-filename").textContent = `$ cat ${targetSection.dataset.filename}.md`;
  } else {
    document.getElementById("current-filename").textContent = "";
  }
};

window.addEventListener("hashchange", updateHeader);
document.addEventListener("DOMContentLoaded", updateHeader);
