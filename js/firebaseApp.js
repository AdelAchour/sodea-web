(function () {

    var firebaseConfig = {
        apiKey: "AIzaSyDgA5Qx0twKVvFxwwKZ8--nzeK5nXUAz3E",
        authDomain: "sodeaproducts.firebaseapp.com",
        databaseURL: "https://sodeaproducts.firebaseio.com",
        projectId: "sodeaproducts",
        storageBucket: "sodeaproducts.appspot.com",
        messagingSenderId: "432218889035",
        appId: "1:432218889035:web:1415c2247e6f57317c66ce"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    //get elements
    const emailTxt = document.getElementById('emailTxt');
    const passTxt = document.getElementById('passTxt');
    const loginBtn = document.getElementById('loginBtn');
    const stateTxt = document.getElementById('stateTxt');

    loginBtn.addEventListener('click' ,ev => {
        ev.preventDefault();
        //get email & pass
        const email = emailTxt.value;
        const pass = passTxt.value;
        const auth = firebase.auth();

        //sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => {
            console.log(e.message);
            stateTxt.style.color = "#ca2f37";
            stateTxt.innerHTML = e.message;
        });

        //auth listener
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log("logged : \n"+user.uid);
                stateTxt.style.color = "#069f1f";
                stateTxt.innerHTML = "Correct!";
                window.location = 'home/home.html';
            } else {
                console.log("not logged in");
            }
        });


    });

    //auth listener outside button
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("logged : \n"+user.uid);
            stateTxt.style.color = "#069f1f";
            stateTxt.innerHTML = "Correct!";
            window.location = 'home/home.html';
        } else {
            console.log("not logged in");
        }
    });

})();