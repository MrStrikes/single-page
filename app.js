window.onload = function(){
    var links = document.querySelectorAll('.link');
    var main = document.querySelector('main');
    var loginPage = 'templates/login.html';
    var registerPage = 'templates/register.html';
    var logout = 'templates/logout.html';
    var homepage = 'templates/homepage.html';
    var manager = 'templates/datas.html';
    load(homepage, main);
    if(sessionStorage.getItem('username') || sessionStorage.getItem('password') !== null){
        var saluteUser = document.querySelector('#hello-username');
        saluteUser.innerHTML = 'Hello '+sessionStorage.getItem('username');
        var registerLoggedIn = document.querySelector('#register');
        var loggedIn = document.querySelector('#login');
        registerLoggedIn.style.display = 'none';
        loggedIn.style.display = 'none';
        var managerTemplateBtn = document.querySelector('#manager');
        var logoutBtn = document.querySelector('#logout');
        managerTemplateBtn.style.display = 'inherit';
        logoutBtn.style.display = 'inherit';
        var managerLoad = links.item(3);
        var logoutAction = links.item(4);
        managerLoad.onclick = function(){
        load(manager, main);
        document.forms['rename-username'].onsubmit = function(){
            var newUsername = this.elements['new-username'].value;
            alert('You succesfully changed '+sessionStorage.getItem('username')+' for the username '+newUsername);
            updateStorages('username', newUsername);
            saluteUser.innerHTML = 'Hello '+sessionStorage.getItem('username');
            return false;
            }
        }
        logoutAction.onclick = function(){
            alert('You have successfully been logged out');
            deleteStorage('username');
            deleteStorage('password');
            load(homepage, main);
            managerTemplateBtn.style.display = 'none';
            logoutBtn.style.display = 'none';
            loggedIn.style.display = 'inherit';
            registerLoggedIn.style.display = 'inherit';
            saluteUser.style.display = 'none';
            return false;
        }
    }
    var loginLoad = links.item(2);
    loginLoad.onclick = function(){
        load(loginPage, main);
        document.forms['login-form'].onsubmit = function(){
            var saluteUser = document.querySelector('#hello-username');
            saluteUser.innerHTML = 'Hello '+sessionStorage.getItem('username');
            var username = this.elements['usr'].value;
            var password = this.elements['pwd'].value;
            /* ----------------------------------- */
            var userLog = localStorage.getItem('username');
            var pwdLog = localStorage.getItem('password');
            if(username === userLog && password === pwdLog){
                alert('Salut '+username+' !');
                loginUser('username', username);
                loginUser('password', password);
                saluteUser.innerHTML = 'Hello '+sessionStorage.getItem('username');
                var registerLoggedIn = document.querySelector('#register');
                var loggedIn = document.querySelector('#login');
                registerLoggedIn.style.display = 'none';
                loggedIn.style.display = 'none';
                load(homepage, main);
                var managerTemplateBtn = document.querySelector('#manager');
                var logoutBtn = document.querySelector('#logout');
                managerTemplateBtn.style.display = 'inherit';
                logoutBtn.style.display = 'inherit';
                var managerLoad = links.item(3);
                var logoutAction = links.item(4);
                managerLoad.onclick = function(){
                    load(manager, main);
                    document.forms['rename-username'].onsubmit = function(){
                        var newUsername = this.elements['new-username'].value;
                        alert('You succesfully changed '+username+' for '+newUsername);
                        updateStorages('username', newUsername);
                        saluteUser.innerHTML = 'Hello '+sessionStorage.getItem('username');
                        return false;
                    }
                }
                logoutAction.onclick = function(){
                    alert('You have successfully been logged out');
                    deleteStorage('username');
                    deleteStorage('password');
                    load(homepage, main);
                    managerTemplateBtn.style.display = 'none';
                    logoutBtn.style.display = 'none';
                    loggedIn.style.display = 'inherit';
                    registerLoggedIn.style.display = 'inherit';
                    saluteUser.style.display = 'none';
                    return false;
                }
            } else {
                alert('There is an error during the login process.It\'s maybe due to the creditentials you\'ve given');
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
            alert('Welcome to this super single-page website !')
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

function registerUser(key, data){
    localStorage.setItem(key, data);
}

function loginUser(key, data){
    sessionStorage.setItem(key, data);
}

function updateStorages(key, data){
    sessionStorage.setItem(key, data);
    localStorage.setItem(key, data);
}

function deleteStorage(key){
    sessionStorage.removeItem(key); 
}

function load(url, element){
    req = new XMLHttpRequest();
    req.open("POST", url, false);
    req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    req.send(null);

    element.innerHTML = req.responseText; 
}