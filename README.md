# # Pippin JS
- Accept online payment with few lines of javascript
- Simple wrapper over Cashfree's javascript sdk

## Prerequisite 
- `order_token` 
- A success handler
- A failure handler

## Code

### Include script
```<script  src="dist/pippin.min.js"></script>```

or
### use the below script inside a `<script>` tag
```
<script>
"use strict";!function(){var e,t;window.Pippin||(t=3e5*Math.ceil(new Date/3e5),(e=document.createElement("script")).type="text/javascript",e.async=!0,e.crossorigin="anonymous",e.src="https://sdk.cashfree.com/js/pippin/1.0.0/pippin.min.js?v="+t,(t=document.getElementsByTagName("script")[0]).parentNode.insertBefore(e,t))}();
</script>
```	
### Accept Payment
```
//Set token
const  orderToken  =  "gbJgZ5ydScqlyhUmZNmZ";
//Set env
const  env  =  "sandbox"; //or production
//Create Success Callback
const  successCallback  =  function (data) {
	console.log(data);
}
//Create Failure Callback
const  failureCallback  =  function (data) {
	console.log(data);
}
Pippin(env, orderToken, successCallback, failureCallback);
```
### Sample Failure Response
```
{
  "order": {
    "status": "ACTIVE"
  },
  "transaction": {
    "merchantId": 27,
    "cfOrderId": 1779127,
    "orderId": "order_2720dm3jke9qRxNo46VZt9sR4EMzt",
    "orderHash": "gbJgZ5ydScqlyhUmZNmZ",
    "transactionId": 1151703,
    "paymentCode": 3022,
    "paymentMode": "NET_BANKING",
    "transactionAmount": 307.08,
    "bankName": "ICICI Bank",
    "txStatus": "FAILED",
    "txTime": "2021-11-08 23:57:05",
    "isFlagged": false,
    "pg": "sim",
    "captured": false,
    "credId": 0,
    "capturedAmount": 0,
    "cardType": "",
    "txMsg": "Your transaction has failed.",
    "txRef": "36920",
    "txPGRef": "",
    "currency": "INR",
    "maskedCardNumber": ""
  }
}
```
### Sample Success Response
```
{
  "order": {
    "status": "PAID"
  },
  "transaction": {
    "merchantId": 27,
    "cfOrderId": 1779127,
    "orderId": "order_2720dm3jke9qRxNo46VZt9sR4EMzt",
    "orderHash": "gbJgZ5ydScqlyhUmZNmZ",
    "transactionId": 1151704,
    "paymentCode": 3022,
    "paymentMode": "NET_BANKING",
    "transactionAmount": 307.08,
    "bankName": "ICICI Bank",
    "txStatus": "SUCCESS",
    "txTime": "2021-11-08 23:58:38",
    "isFlagged": false,
    "pg": "sim",
    "captured": true,
    "credId": 0,
    "capturedAmount": 307.08,
    "cardType": "",
    "txMsg": "Transaction Successful",
    "txRef": "73392",
    "txPGRef": "",
    "currency": "INR",
    "maskedCardNumber": ""
  }
}
```