/// <reference path="E:\GoogleExt\GoogleExt\jquery.min.js" />
"use strict";

var page = require('webpage').create();
page.viewportsize = { width: 2000, height: 700 };
console.log(window.location);
var url = page.evaluate(
    function () {
        return document.URL;
    }
);
console.log("- current url is " + url);


var system = require('system'),
  t, address;
//TypeData;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js <some URL>');
    phantom.exit();
}

t = Date.now();
address = system.args[1];
//TypeData = system.args[2]


page.open(address, function (status) {
    console.log('status: ' + status);
    if (status === 'success') {
        page.render('img/' + t + '.png');
        //var content = TypeData;
        //var fs = require('fs');
        //var path = 'Content/output.txt';
        //var data = content;
        //fs.write(path, data + '\n', 'w');
        //page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function () {
        //    page.evaluate(function () {
        //        //$("input").keypress(function () {var edValue = $("input").val().toString;var s = edValue; console.log(s); alert(s);})

        //    });
        //});

        
    }
    phantom.exit();
});




