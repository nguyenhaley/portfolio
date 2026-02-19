// fullpage js logic
$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: ["welcome-page", "about", "project", "contact"],
    navigation: true,
    navigationPosition: "right",
    navigationToolTips: ["Welcome", "About Me", "Projects", "Contact Me"],
    showActiveTooltip: true,
    scrollOverflow: true,
  });
});