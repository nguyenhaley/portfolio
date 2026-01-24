// fullpage js logic
$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: ["welcome-page", "about", "contact"],
    navigation: true,
    navigationPosition: "right",
    navigationToolTips: ["Welcome", "About Me", "Contact Me"],
    showActiveTooltip: true,
    scrollOverflow: true,
  });
});