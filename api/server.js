var express = require("express");
var http       = require("http");
var child_process = require('child_process');

var app = express();
var server     = http.createServer(app);
var port = process.env.PORT || 3000;

 app.get("/", function( req , res){
 	console.log("Test");
 	/*console.log("TEst curl");
 	var param = {'total_amount': '1150.00' , 'store_id' : 'testbox', 'tran_id':'5808500dc32f4', 'v':'3.00', 'format':'json'};
 	var cmd = 'curl -i -X POST -H "Content-Type: application/json" -d "'+param+'" https://sandbox.sslcommerz.com/gwprocess/v3/process.php';
 	//var cmd = "curl -s -d '"+ param+"' -H 'Content-Type: application/json' https://sandbox.sslcommerz.com/gwprocess/v3/process.php";  
    var resp = child_process.execSync(cmd);
    var result = resp.toString('UTF8');

    var res

     console.log(resp);
     //res.send("Hello rest");*/

//https://sandbox.sslcommerz.com/validator/api/merchantTransIDvalidationAPI.php?tran_id=571CA95CB5B46&store_id=testbox&store_passwd=qwerty&v=3&format=json



var requestify = require('requestify');

    requestify.post('https://sandbox.sslcommerz.com/gwprocess/v3/gw.php?Q=PAY&SESSIONKEY=8C44B03E5E0F6E010FB9264ABB4C9388')
    .then(function(response) {
        // Get the response body (JSON parsed or jQuery object for XMLs)
        response.getBody();
        console.log(response);
        res.send(response.body);
    });










 });

//listen
server.listen(port, function () {
	console.log("REST server listening on port : "+  port);
});