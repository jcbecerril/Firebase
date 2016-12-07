(function () {

	// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDAk9iiH94ZG7KdwwLYBWXcniA_w1okpas",
    authDomain: "realtime-database-43fb0.firebaseapp.com",
    databaseURL: "https://realtime-database-43fb0.firebaseio.com",
    storageBucket: "realtime-database-43fb0.appspot.com",
    messagingSenderId: "771404861790"
  };
  firebase.initializeApp(config);

  // Obtener elementos
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Añadir evento login
  btnLogin.addEventListener('click', e => {
    // Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  // Añadir evento signup
  btnSignUp.addEventListener('click', e => {
    // Obtener email y pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    // Sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));

  });

  // Añadir evento logout
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  // Añadir un listener en tiempo real
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('no logueado');
      btnLogout.classList.add('hide');
    }
  });

} ());