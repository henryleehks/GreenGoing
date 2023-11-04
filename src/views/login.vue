<template>
    <body>
    <!-- Replace this with their navbar, including a redirect back to the homepage -->
    <!-- <header class="header">
        <a href="../">
            <ion-icon name="arrow-back"></ion-icon>
            Back to Home
        </a> -->
        <!-- <a href="../">
            <img src="../Greengoing/img/logo.png" href="homepage.html">
        </a> -->
        <!-- <a href="homepage.html"></a> -->
        <!-- <a href="homepage.html"> -->
        <!-- <h2 class="logo">Logo</h2> -->
        <!-- <img src="../Greengoing/img/logo.png"> -->
        <!-- </a> -->

        <nav class="navigation">
            <!-- <a href="homepage.html">Back to Home</a>
            <a href="homepage.html">
                <ion-icon name="arrow-back"></ion-icon>
            </a> -->
            <!-- <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
            <button class="btnLogin-popup">Login</button> -->
        </nav>
    <!-- </header> -->

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



    <!-- <script src="login.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.0.0/flowbite.min.js"></script> -->

</body>
</template>