
var firebaseConfig = {
      apiKey: "AIzaSyD_oDh7mdwOXXL70BbVlhGAPHKTPp0TyzA",
      authDomain: "kwitter-17b6e.firebaseapp.com",
      databaseURL: "https://kwitter-17b6e-default-rtdb.firebaseio.com",
      projectId: "kwitter-17b6e",
      storageBucket: "kwitter-17b6e.appspot.com",
      messagingSenderId: "340884063027",
      appId: "1:340884063027:web:c7c2de831565bd106ff446"
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
