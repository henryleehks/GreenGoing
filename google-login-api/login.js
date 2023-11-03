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

// Inside the registration event listener
const register = document.getElementById('register');
register.addEventListener('click', (e) => {
    e.preventDefault();

    // Get email and password from input fields
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value;
    const username = document.getElementById('username').value;

    // Use Firebase Authentication to create a new user
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Add user details to the database
            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
            }).then(() => {
                // Redirect to the desired page
                window.location.href = "index.html";
            }).catch((error) => {
                console.error('Error adding user details to the database', error);
            });

            alert('User created!');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Inside the login event listener
const login = document.getElementById('login');
login.addEventListener('click', (e) => {
    e.preventDefault();

    // Get email and password from input fields
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    const username = email.split("@")[0];

    // Use Firebase Authentication to sign in
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User has successfully logged in
            const user = userCredential.user;

            // Update user's last login time
            const dt = new Date();
            update(ref(database, 'users/' + user.uid), {
                last_login: dt,
            });

            // Redirect to the desired page
            window.location.href = "homepage.html?username=" + username + "&email=" + email;

            alert('User logged in!');
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

