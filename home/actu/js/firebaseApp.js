(function () {

  // Your web app's Firebase configuration
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


    /*const logoutBtn = document.getElementById('logoutBtn');

    logoutBtn.addEventListener('click' ,ev => {
        ev.preventDefault();

        firebase.auth().signOut().then(function() {
            // Sign-out successful.
            console.log("logged out, go back");
            window.location = '../index.html';

        }).catch(function(error) {
            // An error happened.
        });

    });*/


    //auth listener outside button
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log("logged at home : \n"+user.uid);
        } else {
            console.log("not logged in, go back");
            window.location = '../../index.html';
        }
    });

})();