const urlSankhya = window.location.search;
var parametros = new URLSearchParams(urlSankhya);
var contextPage = window.parent.dashboard[parametros.get('nuGdg')];

function openApp(resourceID, params) { contextPage.openApp(resourceID, params); }
function openLevel(leveID, params) { contextPage.openLevel(leveID, params); }

try {
    parent.$('.gwt-Button.chartConfigButton').remove();
    parent.$('.VCompactBar').css("visibility", "hidden");
} catch (error) {
    console.error(error)
}