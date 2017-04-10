$(document).ready(function () {
    jQuery.support.cors = true;



    if ($(".scrap").click(function () {


       chrome.tabs.getSelected(null, function (tab) {

      chrome.tabs.executeScript(null, {"file": "content.js" },
        function (results) { alert(results); });

        console.log(tab.url);
        var currenturl = tab.url;




        $.ajax({

        url: "http://localhost:66/WebService1.asmx/Scrap",

        type: "Post",

        data: "{'pageUrl':'" + currenturl + "'}",

        contentType: "application/json; charset=utf-8",

        dataType: "json",

    });




    });



    }));
});