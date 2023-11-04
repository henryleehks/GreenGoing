<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url('../../img/homepage background 3.jpg') no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
}

header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 100px;
    /* padding: max(20px 25%); */
    background: rgba(59, 34, 34, 0.9);
    /* background: rgba(255, 255, 255, 0.544); */
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    z-index: 99;
}

.header a {
    text-decoration: none;
    color: white;
    margin-left: 5px;
    position: relative;
    font-size: 1.1em;
}

.header a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
}

.header a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
}

.logo {
    font-size: 2em;
    color: #fff;
    user-select: none;
}

img {
    margin-left: 5px;
    width: 40%;
    height: 40%;
}

.navigation a {
    position: relative;
    font-size: 1.1em;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 40px;
}

.navigation a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 3px;
    background: #fff;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
}

.navigation a:hover::after {
    transform-origin: left;
    transform: scaleX(1);
}

.navigation .btnLogin-popup {
    width: 130px;
    height: 50px;
    background: transparent;
    border: 2px solid #fff;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.1em;
    color: #fff;
    font-weight: 500;
    margin-left: 40px;
    transition: .5s;
}

.navigation .btnLogin-popup:hover {
    background: #fff;
    color: #162938;
}

.wrapper {
    /* position: relative;
    width: 400px;
    height: 440px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .5);
    border-radius: 20px; */
    /* backdrop-filter: blur(20px); */
    /* background-color: white;
    box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transform: scale(0);
    transition: transform .5s ease, height .2s ease; */

    position: absolute;
    margin-top: 20px;
    top: 50%;
    left: 50%;
    /* width: 400px;
    height: 520px;  */
    width: 90%;
    max-width: 400px;
    height: 70%;
    max-height: 620px;
    background-color: rgba(255, 255, 255, 0.544);
    border: 2px solid #fff;
    border-radius: 20px;
    box-shadow: 0 0 30px rgba(8, 121, 241, 0.5);
    backdrop-filter: blur(20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transform: translate(-50%, -50%);
    /* transform: scale(0); */
    transition: transform .18s ease, height .5s ease;
}

.wrapper.active-popup {
    transform: scale(1);
}

.wrapper.active {
    margin-top: 35px;
    height: 570px;
}

.wrapper .form-box {
    width: 100%;
    padding: 40px;
}

.wrapper .form-box.login {
    transition: transform .18s ease;
    transform: translateX(0);
}

.wrapper.active .form-box.login {
    transition: none;
    transform: translateX(-400px);
}

.wrapper .form-box.register {
    position: absolute;
    transition: none;
    transform: translateX(400px);
}

.wrapper.active .form-box.register {
    transition: transform .18s ease;
    transform: translateX(0);
}

.wrapper .icon-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 45px;
    background-color: #162938;
    font-size: 2em;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom-left-radius: 20px;
    cursor: pointer;
    z-index: 1;
}

.form-box h2 {
    font-size: 2em;
    color: #162938;
    text-align: center;
}

.input-box {
    position: relative;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid #162938;
    margin: 30px 0;
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #162938;
    font-weight: 500;
    pointer-events: none;
    transition: .5s;
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color: #162938;
    font-weight: 600;
    padding: 0 35px 0 5px;
}

.input-box .icon {
    position: absolute;
    right: 8px;
    font-size: 1.2em;
    color: #162938;
    line-height: 57px;
}

.remember-forgot {
    font-size: .9em;
    color: #162938;
    font-weight: 500;
    margin: -15px 0 15px;
    display: flex;
    justify-content: space-between;
}

.remember-forgot label input {
    accent-color: #162938;
    margin-right: 3px;
}

.remember-forgot a {
    color: #162938;
    text-decoration: none;
}

.remember-forgot a:hover {
    text-decoration: underline;
}

.btn {
    width: 100%;
    height: 45px;
    background-color: #162938;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1em;
    color: #fff;
    font-weight: 500;
}

.login-register {
    font-size: .9em;
    color: #162938;
    text-align: center;
    font-weight: 500;
    margin: 25px 0 10px;
}

.login-register p a {
    color: #162938;
    text-decoration: none;
    font-weight: 600;
}

.login-register p a:hover {
    text-decoration: underline;
}

.container {
    padding: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
}

#btnWrap {
    max-width: 320px;
}

.pro-data {
    padding: 10px 20px;
    margin: auto;
    width: 350px;
    background-color: #F7F7F7;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
        0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.pro-data h3 {
    font-size: 17px;
}

.pro-data p {
    font-size: 15px;
}

.pro-data img {
    max-width: 100%;
    margin-bottom: 5px;
}

.hidden {
    display: none;
}

#authResponse {
    font-size: 17px;
    border: 1px dashed;
}

form>p {
    text-align: center;
    margin-top: 10px;
}
</style>

<!-- Load Google client library -->


<template>
    <script src="https://accounts.google.com/gsi/client" async defer></script>
    <script src="https://apis.google.com/js/platform.js?onload=initGoogleSignIn" async defer></script>

    <script>
        function initGoogleSignIn() {
                    gapi.load('auth2', function () {
                        gapi.auth2.init({
                            client_id: '176192187370-3odlpcm2nbk05h3cfh9bcleh3gh7s4c7.apps.googleusercontent.com'
                        });
                    });
                }

                // Credential response handler function
                function handleCredentialResponse(response) {
                    // Post JWT token to server-side
                    fetch("auth_init.php", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ request_type: 'user_auth', credential: response.credential }),
                    })
                        .then(response => response.json())
                        .then(data => {
                            if (data.status == 1) {
                                let responsePayload = data.pdata;

                                // Display the user account data
                                let profileHTML = '<h3>Welcome ' + responsePayload.given_name + '! <a href="javascript:void(0);" onclick="signOut(' + responsePayload.sub + ');">Sign out</a></h3>';
                                profileHTML += '<img src="' + responsePayload.picture + '"/><p><b>Auth ID: </b>' + responsePayload.sub + '</p><p><b>Name: </b>' + responsePayload.name + '</p><p><b>Email: </b>' + responsePayload.email + '</p>';
                                document.getElementsByClassName("pro-data")[0].innerHTML = profileHTML;

                                document.querySelector("#btnWrap").classList.add("hidden");
                                document.querySelector(".pro-data").classList.remove("hidden");

                                // Redirect to the homepage after login
                                window.location.href = "../?name=" + responsePayload.given_name + "&email=" + responsePayload.email;;
                            }
                        })
                        .catch(console.error);
                }

                // Sign out the user
                function signOut(authID) {
                    document.getElementsByClassName("pro-data")[0].innerHTML = '';
                    document.querySelector("#btnWrap").classList.remove("hidden");
                    document.querySelector(".pro-data").classList.add("hidden");
                    // May need to configure the redirect here
                    document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://localhost/is216/greengoing/google-login-api";
                    // document.location.href = "http://localhost/is216/greengoing/homepage.html";
                    // window.location.href = "http://localhost/is216/greengoing/homepage.html";
                }
    </script>

    <body>
        <div class="wrapper">
            <!-- <span class="icon-close">
            <ion-icon name="close"></ion-icon>
        </span> -->

            <div class="form-box login">
                <h2>Login</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" id="email-login" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" id="password-login" required>
                        <label>Password</label>
                    </div>
                    <!-- <div class="remember-forgot">
                    <label>
                        <input type="checkbox">Remember me
                    </label>
                    <a href="#">Forgot Password?</a>
                </div> -->
                    <a href="../">

                    </a>
                    <button type="submit" id="login"
                        class="btn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Login</button>

                    <p>or</p>

                    <div class="container">
                        <!-- Sign In with Google Button HTML API -->
                        <!-- May need to configure data-login_uri -->
                        <div id="btnWrap">
                            <div id="g_id_onload"
                                data-client_id="176192187370-3odlpcm2nbk05h3cfh9bcleh3gh7s4c7.apps.googleusercontent.com"
                                data-context="signin" data-ux_mode="popup" data-callback="handleCredentialResponse"
                                data-auto_prompt="true"
                                data-login_uri="https://localhost/is216/greengoing/google-login-api">
                            </div>

                            <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline"
                                data-text="signin_with" data-size="large" data-logo_alignment="center">
                            </div>
                        </div>

                        <!-- Display the user's profile info -->
                        <div class="pro-data hidden"></div>

                    </div>

                    <div class="login-register">
                        <p>
                            Don't have an account?
                            <a href="#" class="register-link">Register</a>
                        </p>


                    </div>
                </form>
            </div>

            <div class="form-box register">
                <h2>Registration</h2>
                <form action="#">
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="person"></ion-icon>
                        </span>
                        <input type="text" id="username" required>
                        <label>Username</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="email" id="email-register" required>
                        <label>Email</label>
                    </div>
                    <div class="input-box">
                        <span class="icon">
                            <ion-icon name="lock-closed"></ion-icon>
                        </span>
                        <input type="password" id="password-register" required>
                        <label>Password</label>
                    </div>
                    <div class="remember-forgot">
                        <label>
                            <input type="checkbox" required>I agree to the terms & conditions
                        </label>

                    </div>
                    <button type="submit" id="register"
                        class="btn text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Register</button>

                    <p>or</p>

                    <div class="container">
                        <!-- Sign Up with Google Button HTML API -->
                        <!-- May need to configure data-login_uri -->
                        <div id="btnWrap">
                            <div id="g_id_onload"
                                data-client_id="176192187370-3odlpcm2nbk05h3cfh9bcleh3gh7s4c7.apps.googleusercontent.com"
                                data-context="signup" data-ux_mode="popup" data-callback="handleCredentialResponse"
                                data-auto_prompt="true"
                                data-login_uri="https://localhost/is216/greengoing/google-login-api">
                            </div>

                            <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline"
                                data-text="signup_with" data-size="large" data-logo_alignment="center">
                            </div>
                        </div>

                        <!-- Display the user's profile info -->
                        <div class="pro-data hidden"></div>

                    </div>

                    <div class="login-register">
                        <p>
                            Already have an account?
                            <a href="#" class="login-link">Login</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </body>
    <script>
    
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    // const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    // btnPopup.addEventListener('click', ()=> {
    //     wrapper.classList.add('active-popup');
    // });

    // iconClose.addEventListener('click', ()=> {
    //     wrapper.classList.remove('active-popup');
    // });
    </script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    <script type="module">
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
        // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
        import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
        import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyBWD2dz3Bj8knRkHD5wgn7X5ly1eVkygSc",
            authDomain: "greengoing-8e009.firebaseapp.com",
            databaseURL: "https://greengoing-8e009-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "greengoing-8e009",
            storageBucket: "greengoing-8e009.appspot.com",
            messagingSenderId: "892747843777",
            appId: "1:892747843777:web:367a797620802e6fff2c40"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // const analytics = getAnalytics(app);
        const database = getDatabase(app);
        const auth = getAuth();

        const register = document.getElementById('register')
        register.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent form submission

            var email = document.getElementById('email-register').value;
            var password = document.getElementById('password-register').value;
            var username = document.getElementById('username').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log("User registered: ", user);

                    set(ref(database, 'users/' + user.uid), {
                        username: username,
                        email: email,
                    })
                    window.location.reload();
                    alert('User created!');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    // ..
                });

        });

        const login = document.getElementById('login')
        login.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent form submission

            var email = document.getElementById('email-login').value;
            var password = document.getElementById('password-login').value;
            var username = email.split("@")[0];

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    const dt = new Date();
                    update(ref(database, 'users/' + user.uid), {
                        last_login: dt,
                    })
                    window.location.href = "../?username=" + username + "&email=" + email;
                    alert('User logged in!');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                });
        });

        const user = auth.currentUser;
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                // ...
            } else {
                // User is signed out
                // ...
            }
        });

        // Logout function
        const logout = document.getElementById('logout')
        logout.addEventListener('click', (e) => {
            signOut(auth).then(() => {
                // Sign-out successful.
                alert('User Logged Out')
            }).catch((error) => {
                // An error happened.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
        })
    </script>
</template>


