import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

  const totalUsers : Object = [];
  const config = {
    apiKey: "AIzaSyCsoNZ1Ng44aw1rE_6XGta_CO6vzuOZ3DU",
    authDomain: "tienda-a4e29.firebaseapp.com",
    databaseURL: "https://tienda-a4e29.firebaseio.com",
    projectId: "tienda-a4e29",
    storageBucket: "tienda-a4e29.appspot.com",
    messagingSenderId: "800670169708",
    appId: "1:800670169708:web:24c536d7470f777be8f649"
    
  };
  firebase.initializeApp(config);

const productosDb = firebase.database().ref().child('productos')
const usuariosDb = firebase.database().ref().child('usuarios')

usuariosDb.orderByChild("id").on("child_added", function(snapshot) {
  totalUsers.push(snapshot.key)
});

