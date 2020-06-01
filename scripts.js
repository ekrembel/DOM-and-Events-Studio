// Write your JavaScript code here.
// Remember to pay attention to page loading!
let height = 0;
function takeOff() {
    height += 10000;
    document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
    document.querySelector("#shuttleBackground").style.backgroundColor = "blue";
    document.getElementById("spaceShuttleHeight").innerHTML = height;
    return confirm("Confirm that the shuttle is ready for takeoff.");
}

function land() {
    document.getElementById("flightStatus").innerHTML = "Shuttle has landed.";
    document.querySelector("#shuttleBackground").style.backgroundColor = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    return confirm("The shuttle is landing. Landing gear engaged.");
}

function abort() {
    document.getElementById("flightStatus").innerHTML = "Mission aborted.";
    document.querySelector("#shuttleBackground").style.backgroundColor = "green";
    document.getElementById("spaceShuttleHeight").innerHTML = 0;
    return confirm("Confirm that you want to abort the mission.");
}
let bottomPadding = 0;
let topPadding = 0;
let leftPadding = 0;
let rightPadding = 0;
function up() {
    bottomPadding += 10;
    height += 10000;
    document.getElementById("spaceShuttleHeight").innerHTML = height;
    document.querySelector("#rocket").style.paddingBottom = bottomPadding + "px";
}
function down() {
    topPadding += 10;
    height -= 10000;
    document.getElementById("spaceShuttleHeight").innerHTML = height;
    document.querySelector("#rocket").style.paddingTop = topPadding + "px";
}
function right() {
    leftPadding += 10;
    document.querySelector("#rocket").style.paddingLeft = leftPadding + "px";
}
function left() {
    rightPadding += 10;
    document.querySelector("#rocket").style.paddingRight = rightPadding + "px";
}