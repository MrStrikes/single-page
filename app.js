window.onload = function(){
    var links = document.querySelectorAll('.link');
    var main = document.querySelector('main');
    var loginPage = 'templates/login.html';
    var registerPage = 'templates/register.html';
    var logout = 'templates/logout.html';
    var homepage = 'templates/homepage.html';
    load(homepage, main);
    for(var i in links){
        var loginLoad = load(links[i], loginPage);
        loginLoad = links.item(2);
        loginLoad.onclick = function(){
            load(loginPage, main);
            document.forms['login-form'].onsubmit = function(){
                var username = this.elements['usr'].value;
                var password = this.elements['pwd'].value;
                storeDatas('user', username);
                return false;
            }
        }
        var registerLoad = load(links[i], registerPage); 
        registerLoad = links.item(1);
        registerLoad.onclick = function(){
            load(registerPage, main);
            document.forms['reg-form'].onsubmit = function(){
                var username = this.elements['user'].value;
                var password = this.elements['pass'].value;
                storeDatas('username', username);
                storeDatas('password', password);
                return false;
            }
        } 
        var homepageLoad = load(links[i], homepage); 
        homepageLoad = links.item(0);
        homepageLoad.onclick = function(){
            load(homepage, main);
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

function load(url, element)
{
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText; 
}