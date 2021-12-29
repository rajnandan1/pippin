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
let orderToken = "";
let env = "production"; //or production
// var rates = document.getElementsByName('radio');

document.getElementById("pippin-sample").addEventListener("click", () => {
    orderToken = document.getElementById("order_token").value.trim();
    if (orderToken == "") {
        alert("Order token empty");
        return;
    }

    Pippin(env, orderToken, successCallback, failureCallback);
});
