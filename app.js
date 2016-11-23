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
  const preObject = document.getElementById('objeto');

  // Crear referencias
  const dbRefObject = firebase.database().ref().child('objeto');

  // Sincronizar cambios objeto
  dbRefObject.on('value', snap => {
  	preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });
} ());