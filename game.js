  const $cookiesBanner = document.querySelector(".cookies-banner"); //DOM BANNER ACTION
  const $cookiesBannerButton = $cookiesBanner.querySelector("button");

  $cookiesBanner.style.display = 'block';

  $cookiesBannerButton.addEventListener("click", () => { //COOKIES ACCEPT
    fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
    const ipAddress = data.ip;
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
    const browserInfo = navigator.userAgent;
    console.log(browserInfo);
    console.log(ipAddress);

    $cookiesBanner.remove()
    })
    .catch(error => console.error('Error', error));
  });


window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = '';
   window.onload = init;
    window.onclick = clk;
    window.onbeforeunload = closing; //BEFOREUNLOAD 
    
    function closing() {
        console.log("function alrt WORKS !!!!"); 
        window.alert("closing now.....");
    }
});


document.addEventListener("DOMContentLoaded", function(event) { 
  
    var loader = document.getElementById('loader');
    loader.style.display = 'block';  
    var loader_text = 0;
    var loader_textElement = document.querySelector('.loader_text'); //LOADING TEXT
  
    var interval = setInterval(function() {
        loader_text += 1;
      if (loader_text <= 100) {
        loader_textElement.textContent = loader_text + '%'; //LOADING CIRCLES
      } else {
        clearInterval(interval);
        loader_textElement.classList.add('loaded');
        
        var welcomeText = document.getElementById('welcomeText');
        welcomeText.style.display = 'block';
        setTimeout(function() {
          welcomeText.style.transition = 'opacity 1s'; //IamBasic DISAPPEARING
          welcomeText.style.opacity = '0';
        }, 3000);
        setTimeout(function(){
          var player = document.getElementById('player');
          player.style.opacity = '1'; //PLAYER APPEARING
        }, 4000);
      }
      setTimeout(function() {
        loader.style.opacity = '0';
        loader_textElement.style.display = 'none';
    }, 6000);
    }, 60);
  });

  document.addEventListener('keydown', function(event){
    var player = document.getElementById('player');
    var playerPosition = player.getBoundingClientRect();
    if (event.key === 'ArrowLeft') {
      player.style.left = (playerPosition.left - 10) + 'px'; //LEFT MOVE
    } else if (event.key === 'ArrowRight') {
      player.style.left = (playerPosition.left + 10) + 'px'; //RIGHT MOVE
    }
   });