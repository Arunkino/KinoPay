

window.onload = function() {
    // Check if this is the login page
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
       
      loginForm.onsubmit = function(e) {
        if(document.getElementById('password').value==0 || document.getElementById('username').value==0){
            alert("Enter Username and Password");
        }else{

      
        e.preventDefault();
        // Save username to local storage
        localStorage.setItem('username', document.getElementById('username').value);
        // Redirect to index.html
        window.location.href = 'index.html';
      }
    }
}
  
    // Check if this is the index page
    var welcomeMessage = document.getElementById('text-place');
    if (welcomeMessage) {
      // Get username from local storage
      var username = localStorage.getItem('username');
      // Display welcome message
      welcomeMessage.textContent = 'Login: ' + username;
    }

   
  }

  
  function toggleMenu(){
    var x=document.getElementById("left-section");
    
    if(x.style.display==='block'){
      x.style.display="none";
      
    }else{
      x.style.display="block";
      
    }
  }
  

  function helpChat(){
    var x=document.getElementById("chat-box");
    var y=document.getElementById('chat-min');
    
    if(x.style.display==='block'){
      x.style.display="none";
      y.style.display='block';
      
    }else{
      x.style.display="block";
      y.style.display='none';
      
    }
  }

  function helpClose(){
    var x=document.getElementById("chat-box");
    var y=document.getElementById('chat-min');
    
    if(x.style.display==='block'){
      x.style.display="none";
      y.style.display='block';
      
    }else{
      x.style.display="block";
      y.style.display='none';
      
    }

  }
  
  


  


 
  



