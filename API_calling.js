var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

var url = "https://preprod.caavo.com/programs?ids=11895236&ott=true&aliases=true";

var token = "Token token=efeb15f572641809acbc0c26c9c1b63f4f7f1fd7dcb68070e45e26f3a40ec8e3";
var user_agent = "Branch Fyra v1.0";

var request = new XMLHttpRequest();

request.open("GET", url);
request.responseType = 'json';
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader("Authorization", token);
request.setRequestHeader("User-Agent", user_agent);
request.send();

request.onload = () => {
    if (request.status === 200){
        console.log(typeof(JSON.parse(request.responseText)));             
        console.log(`staus = ${request.status}, statusText= ${request.statusText}`);             
        var data;
        for (data of JSON.parse(request.responseText)){
            console.log(data["videos"])
        }
    }else{
        console.log(`error ${request.status} ${request.statusText}`);
    }
}

