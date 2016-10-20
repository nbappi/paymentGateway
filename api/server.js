var express = require("express");
var http       = require("http");
var child_process = require('child_process');

var app = express();
var server     = http.createServer(app);
var port = process.env.PORT || 3000;

 app.get("/", function( req , res){
 	console.log("TEst curl");
 	var param = {'total_amount': '1150.00' , 'store_id' : 'testbox', 'tran_id':'5808500dc32f4', 'v':'3.00', 'format':'json'};
 	var cmd = "curl -s -d '"+ param+"' -H 'Content-Type: application/json' https://securepay.sslcommerz.com/validator/api/merchantTransIDvalidationAPI.php";  
    var resp = child_process.execSync(cmd);
    var result = resp.toString('UTF8');

     console.log(result);
     //res.send("Hello rest");
 });

//listen
server.listen(port, function () {
	console.log("REST server listening on port : "+  port);
});