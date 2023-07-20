/* Toggle between adding and removing the "opened-menu" class to topnav when the user clicks on the icon */
function menu() {
    var navElement = document.getElementsByTagName("nav")[0];
    if (navElement.className === "opened-menu") {
        navElement.className = "closed-menu"; // Remove the "opened-menu" class
    } else {
        navElement.className = "opened-menu"; // Add the "opened-menu" class
    }
}