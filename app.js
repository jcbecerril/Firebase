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
  const ulList = document.getElementById('lista');

  // Crear referencias
  const dbRefObject = firebase.database().ref().child('objeto');
  const dbRefList = dbRefObject.child('habilidades');

  // Sincronizar cambios objeto
  dbRefObject.on('value', snap => {
  	preObject.innerText = JSON.stringify(snap.val(), null, 3);
  });

  // Sincronizar cambios lista
  dbRefList.on('child_added', snap => {
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList.appendChild(li);
  });

  // actualizacion de datos
  dbRefList.on('child_changed', snap => {
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
  });

  // remover datos
  dbRefList.on('child_removed', snap => {
    const liRemove = document.getElementById(snap.key);
    liRemove.remove();
  });

} ());