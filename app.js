window.onload = function(){
    var username = document.querySelector(".usr");
    var pwd = document.querySelector(".pwd");
    var regForm = document.querySelector('.reg-form');
    var links = document.querySelectorAll('.link');
    for(var i in links){
        var linkToPage = 'templates/login.html';
        loadPage(links[i], linkToPage);
    }
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

function loadPage(page, fileName){
    page.onclick = function(){
        callAjax(fileName)
    }
}