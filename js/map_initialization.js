$(document).ready(function() {
	var map = new Datamap({element: document.getElementById("fuel-deploy-map"),
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
});