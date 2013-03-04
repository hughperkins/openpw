console.log('content script');
console.log(document.URL);

chrome.extension.onMessage.addListener(
    function(request,sender,sendResponse){
        var pw = request.pw;
        var domain = request.domain;
        console.log('pw to inject: ' + pw + ' domain ' + domain );
        var inputs = document.getElementsByTagName('input');
        var found = false;
        for (var i = 0; i < inputs.length; i++ ) {
            var input = inputs[i];
            if( input.type == 'password' || input.name == 'password' || input.name == 'pw' || /[^a-z]pw/.test(input.name ) ) {
//                console.log('found password field: id ' + input.id + ' name ' + input.name );
                input.value = pw;
                found = true;
            }
        }
        if( !found ) {
            window.prompt("Password for " + domain + " is ", pw );
        }
    }
);

