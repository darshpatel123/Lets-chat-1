
 var firebaseConfig = {
    apiKey: "AIzaSyCgoSbZS2JC5HIwROkTBhGncEb6T-N6ovY",
    authDomain: "lets-chat-e2a9c.firebaseapp.com",
    databaseURL: "https://lets-chat-e2a9c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-e2a9c",
    storageBucket: "lets-chat-e2a9c.appspot.com",
    messagingSenderId: "137519876359",
    appId: "1:137519876359:web:4c5b07befc9847ed061da2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
function logout(){
      window.location="index.html";

}
