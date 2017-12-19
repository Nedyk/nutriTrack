
//Initializr Firebase 
 var config = {
    apiKey: "AIzaSyA7i_7yLZxHJxRmtHqvYFepccrvGxbrie8",
    authDomain: "nutritrack-smu.firebaseapp.com",
    databaseURL: "https://nutritrack-smu.firebaseio.com",
    projectId: "nutritrack-smu",
    storageBucket: "nutritrack-smu.appspot.com",
    messagingSenderId: "1078293750813"
  };
  firebase.initializeApp(config);

  //Get Elements 
  var txtEmail = document.getElementbyID('txtLogin');
  var txtPassword = document.getElementbyID('txtPassword'); 
  var btnLogin = document.getElementbyID('btnLogin'); 
  var btnSignUp = document.getElementbyID('btnSignup'); 
  var btnLogout = document.getElementbyID('btnLogout');

  //Get Elements 
  var txtEmail = document.getElementbyID('txtLogin');
  var txtPassword = document.getElementbyID('txtPassword'); 
  var btnLogin = document.getElementbyID('btnLogin'); 
  var btnSignUp = document.getElementbyID('btnSignup'); 
  var btnLogout = document.getElementbyID('btnLogout');

  //add login event on click listener
  btnLogin.addEventListener('click', function(e){
  	//Get email and pass 
  	var email = txtEmail.value(); 
  	var pass = txtPassword.value(); 
  	var auth = firebase.auth(); 
  	// sign in 
  	var promise = auth.signInWithEmailAndPassword(email, pass); 
  	promise.catch(e => console.log(e.message)); 
  }); 

  //add signUp Event
  btnSignup.addEventListener('click', function(e){
  	//Get email and pass 
  	var email = txtEmail.value(); 
  	var pass = txtPassword.value(); 
  	var auth = firebase.auth(); 
  	// sign in 
  	var promise = auth.createUserWithEmailAndPassword(email, pass); 
  	promise.catch(e => console.log(e.message)); 
  }); 

  //add a realtime Listener
  firebase.auth.onAuthStateChanged(firebaseUser => { 
  	if(firebaseUser) {
  		console.log(firebaseUser); 
  	} else{
  		console.log('not logged in'); 
  	}
  }); 