document.addEventListener("readystatechange", (event) => {
    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {
      //does same as:  ..addEventListener("DOMContentLoaded"..
      topbar.config({
        autoRun: false,
        barThickness: 3,
        barColors: {
          0: "rgba(26,  188, 156, .7)",
          ".3": "rgba(41,  128, 0, .7)",
          "1.0": "rgba(0, 255,  0,  .4)",
        },
        shadowBlur: 5,
        shadowColor: "rgba(0, 0, 0, .5)",
        className: "topbar",
      });
      topbar.show();
      (function step() {
        setTimeout(function () {
          if (topbar.progress("+.01") < 1) step();
        }, 16);
      })();
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...)
    if (event.target.readyState === "complete") {
      topbar.hide();
    }
  });