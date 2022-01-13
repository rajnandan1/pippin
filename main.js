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
    document.getElementById("response").innerHTML =
        "<pre><b>Pippin Closed</b><br>" + "</pre>";
};
let orderToken = "";
let env = document.getElementById("pippinEnv").value; //or production
// var rates = document.getElementsByName('radio');
const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
if (params.order_token) {
	orderToken = params.order_token;
	document.getElementById("order_token").value = orderToken;
}
document.getElementById("pippin-sample").addEventListener("click", () => {
    orderToken = document.getElementById("order_token").value.trim();
    if (orderToken == "") {
        alert("Order token empty");
        return;
    }

    Pippin(env, orderToken, successCallback, failureCallback, dismissCallback);
});
