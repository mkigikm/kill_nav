var i, pos,
    els = [].slice.apply(window.getElementsByTagName("*"));

els.forEach(function (el) {
  pos = window.getComputedStyle(el).getPropertyValue("position");

  if (pos === "fixed") {
    el.style.display = "none";
  }
});
