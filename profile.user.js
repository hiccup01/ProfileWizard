// ==UserScript==
// @name        ProfileWizard
// @namespace   https://scratch.mit.edu/users/hiccup01
// @description Makes scratch profiles better
// @author      hiccup01
// @include     https://scratch.mit.edu/*
// @exclude     https://scratch.mit.edu
// @exclude     https://scratch.mit.edu/discuss/*
// @version     2.8
// @grant       none
// @updateURL   http://www.hiccup01.com/js/userscripts/profile.user.js
// @icon        http://www.hiccup01.com/img/pw.png
// ==/UserScript==
console.log("Running ProfileWizard v2.8");
function updateBodyHeight() {
 if (location.hash === "#editor") {
  document.body.style.height = "";
 } else {
  document.body.style.height = "auto";
 }
}
window.addEventListener("hashchange", updateBodyHeight);
updateBodyHeight();
var aboutme = document.getElementsByClassName(".about");
var status = document.querySelector("textarea[name=status]");
if (status == null || status == undefined || status == "undefined") {
    status = document.getElementsByClassName("overview")[1];
}if (status == null || status == undefined || status == "undefined") {
    status = document.getElementById("description").childNodes[3].childNodes[1];
}if (status == null || status == undefined || status == "undefined") {
    status = document.querySelector("textarea[name=description]")[0];
}
var textarea = status.innerHTML;
var colour = textarea.substring((textarea.indexOf("§") + 1), (textarea.indexOf("§") + 8));
var url = textarea.substring((textarea.indexOf("≤") + 1), (textarea.indexOf("≥")));
colour.toString();
url = encodeURI(url);
var isOk  = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(colour);
if (isOk  == true || url !== "" || null || "null" || undefined) {
if (isOk == true) {
	console.log("Set page colour to: " + colour);
	if (url !== "" || null || "null" || undefined) {
		colour = colour.concat(" url(\"", url, "\") repeat");
	}
} else {
	colour = "#FFFFFF url(\"" + url + "\") repeat";
}
document.body.style.background = colour;
} else {
console.log("No colour found or invalid colour.");
}

