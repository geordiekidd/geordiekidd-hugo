(function() {
    document.documentElement.classList.add("js");
    var e, s, i, t = window.matchMedia("(min-width: 51em)"),
        o = document.querySelector(".container");
    if (!o) return;
    if (s = Array.prototype.slice.call(o.querySelectorAll(".sidenote-number")), e = Array.prototype.slice.call(o.querySelectorAll(".sidenote")), !e.length) return;

    function r() {
        s.forEach(function(n, s) {
            var o = t.matches || e[s].classList.contains("is-open");
            n.setAttribute("aria-expanded", o ? "true" : "false")
        })
    }
    s.forEach(function(n, s) {
        n.addEventListener("click", function() {
            if (t.matches) return;
            var o = e[s].classList.toggle("is-open");
            n.setAttribute("aria-expanded", o ? "true" : "false")
        })
    });

    function n() {
        a(), r()
    }
    n(), window.addEventListener("load", n), document.fonts && document.fonts.ready && document.fonts.ready.then(n), window.addEventListener("resize", function() {
        clearTimeout(i), i = setTimeout(n, 150)
    }), t.addEventListener && t.addEventListener("change", n)
})()
