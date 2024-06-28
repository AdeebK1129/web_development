/* Display Form 'display.html' */
// collect the elements
const collectedname = document.querySelector(".collectedname");
const collectedlanguage = document.querySelector(".collectedlanguage");
// set the values stored in sessionstorage to each collected elements
collectedname.innerHTML = sessionStorage.getItem("firstname");
collectedlanguage.innerHTML = sessionStorage.getItem("selection_language");