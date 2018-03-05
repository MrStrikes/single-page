window.onload = function(){
    var links = document.querySelectorAll('.link');
    var main = document.querySelector('main');
    var loginPage = 'templates/login.html';
    var registerPage = 'templates/register.html';
    var logout = 'templates/logout.html';
    var homepage = 'templates/homepage.html';
    load(homepage, main);
    if(sessionStorage.getItem('username') || sessionStorage.getItem('password') !== null){
        var registerLoggedIn = document.querySelector('#register');
        var loggedIn = document.querySelector('#login');
        registerLoggedIn.style.display = 'none';
        loggedIn.style.display = 'none';
    }
    for(var i in links){
        var loginLoad = links.item(2);
        loginLoad.onclick = function(){
            load(loginPage, main);
            document.forms['login-form'].onsubmit = function(){
                var username = this.elements['usr'].value;
                var password = this.elements['pwd'].value;
                /* ----------------------------------- */
                var userLog = localStorage.getItem('username');
                var pwdLog = localStorage.getItem('password');
                if(username === userLog && password === pwdLog){
                    alert('Salut !');
                    loginUser('username', username);
                    loginUser('password', password);
                    var registerLoggedIn = document.querySelector('#register');
                    var loggedIn = document.querySelector('#login');
                    registerLoggedIn.style.display = 'none';
                    loggedIn.style.display = 'none';
                    load(homepage, main);
                } else {
                    alert('Error');
                }
                return false;
            }
        }
        var registerLoad = links.item(1);
        registerLoad.onclick = function(){
            load(registerPage, main);
            document.forms['reg-form'].onsubmit = function(){
                var username = this.elements['user'].value;
                var password = this.elements['pass'].value;
                registerUser('username', username);
                registerUser('password', password);
                return false;
            }
        }
        var homepageLoad = links.item(0);
        homepageLoad.onclick = function(){
            load(homepage, main);
        }
    }
}

function registerUser(key, data){
    localStorage.setItem(key, data);
}

function loginUser(key, data){
    sessionStorage.setItem(key, data);
}

function updateStorages(key, data){
    sessionStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem(key, JSON.stringify(data));
}

function load(url, element)
{
    req = new XMLHttpRequest();
    req.open("GET", url, false);
    req.send(null);

    element.innerHTML = req.responseText; 
}