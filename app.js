window.onload = function(){
    var username = document.querySelector(".usr");
    var pwd = document.querySelector(".pwd");
    var regForm = document.querySelector('.reg-form');
    var links = document.querySelectorAll('.link');
    var main = document.querySelector('main');
    var loginPage = 'templates/login.html';
    var registerPage = 'templates/register.html';
    var logout = 'templates/logout.html';
    var homepage = 'templates/homepage.html';
    main.innerHTML = '';
    main.innerHTML = '<object class="datas" type="text/html" data="'+homepage+'"></object>';
    console.log(links);
    for(var i in links){
        var loginLoad = loadPage(links[i], loginPage);
        loginLoad = links.item(2);
        loginLoad.onclick = function(){
            main.innerHTML = '';
            main.innerHTML = '<object class="datas" type="text/html" data="'+loginPage+'" width="auto"></object>';
        }
        var registerLoad = loadPage(links[i], registerPage); 
        registerLoad = links.item(1);
        registerLoad.onclick = function(){
            main.innerHTML = '';
            main.innerHTML = '<object class="datas" type="text/html" data="'+registerPage+'" width="auto"></object>';
        }
        var homepageLoad = loadPage(links[i], homepage); 
        homepageLoad = links.item(0);
        homepageLoad.onclick = function(){
            main.innerHTML = '';
            main.innerHTML = '<object class="datas" type="text/html" data="'+homepage+'"></object>';
        }
    }
}

function storeDatas(key, data){
    sessionStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(key, JSON.stringify(data));
}

function getSessionStorage(key){
    sessionStorage.getItem(JSON.parse(key));
}

function getLocalStorage(key){
    localStorage.getItem(JSON.parse(key));
}

function updateStorages(key, data){
    sessionStorage.removeItem(key);
    sessionStorage.setItem(key, JSON.stringify(data));
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(data));
}

function callAjax(filename){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI(filename));
    xhr.send();
}

function loadPage(page, fileName){
    page.onclick = function(){
        callAjax(fileName);
    }
}