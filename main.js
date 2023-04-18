const successCallback = function (data) {
    console.log(data);
    document.getElementById("response").innerHTML =
        "<pre><b>Success Response</b><br>" +
        JSON.stringify(data, null, 2) +
        "</pre>";
};
const failureCallback = function (data) {
    console.log(data);
    document.getElementById("response").innerHTML =
        "<pre><b>Failure Response</b><br>" +
        JSON.stringify(data, null, 2) +
        "</pre>";
};
const dismissCallback = function () {
   console.log("Pippin Closed");
};
let sessionID = "";
let env = document.getElementById("pippinEnv").value; //or production
// var rates = document.getElementsByName('radio');
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params.session_id) {
	sessionID = params.session_id;
	document.getElementById("session_id").value = sessionID;
}
document.getElementById("pippin-sample").addEventListener("click", () => {
    sessionID = document.getElementById("session_id").value.trim();
    if (sessionID == "") {
        alert("Session ID empty");
        return;
    }

    Pippin(env, sessionID, successCallback, failureCallback, dismissCallback);
});
