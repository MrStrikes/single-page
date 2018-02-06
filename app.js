window.onload = function(){
    var username = document.querySelector(".usr");
    var pwd = document.querySelector(".pwd");
    var regForm = document.querySelector('.reg-form');
    var links = document.querySelectorAll('.link');
    var login = document.querySelector('#homepage');
    var main = document.querySelector('main');
    var loginPage = 'templates/login.html';
    var registerPage = 'templates/register.html';
    var logout = 'templates/logout.html';
    console.log(links);
    for(var i in links){
        var loginLoad = loadPage(links[i], loginPage) 
        loginLoad = links.item(2);
        loginLoad.onclick = function(){
            $('main').load(loginPage);
            return false;
        }
    }
}

function callAjax(filename){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(filename));
    xhr.onload = function() {
        if (xhr.status >= 200 || xhr.status <= 400) {
            console.log('datas loaded')
        } else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

function loadPage(page, fileName){
    page.onclick = function(){
        callAjax(fileName);
    }
}