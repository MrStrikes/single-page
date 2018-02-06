window.onload = function(){
    
}

function callAjax(filename){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(filename));
    xhr.onload = function() {
        if (xhr.status >= 200 || xhr.status <= 400) {
            console.log('datas loaded')
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}