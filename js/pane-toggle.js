$(".pane-toggle").click(function() {
  $("main[role='content']").hide();
  $("aside[role='content-assist']").show(); 
})