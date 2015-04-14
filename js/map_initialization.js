
$(window).load(function() {
  createMap();
});

$(window).on('resize', function() {
  clearInterval(loop);
  var loop = setInterval(createMap, 30);
});

var createMap = function() {
  $('#fuel-deploy-map').empty();
  var map = new Datamap({
    element: document.getElementById("fuel-deploy-map"),
    geographyConfig: {
        popupOnHover: false,
        highlightOnHover: false
      },
      fills: {
        defaultFill: "#ddd",
        deployed: "#e56120"
      },
      data: {
        KEN: { fillKey: "deployed" },
        TZA: { fillKey: "deployed" }
      }
    });
}

