let email = document.querySelector(".email");
let message = document.querySelector(".message");
var x = document.getElementById("snackbar");

function myFunction() {
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }


var typed = new Typed(".text", {
    strings: ["Advisor"  , "Analysist"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})


const fnc = ()=> {
    if(email.value.length < 1 || message.value.length < 1) {
        x.innerHTML = "Name and message are requied🙄🙄"
        myFunction();
    }
    else {
    (async () => {
        const rawResponse = await fetch('https://webscraping-lmk3.onrender.com/p', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({a: email.value, b: message.value})
        });
        const content = await rawResponse.json();
      if(content.success) {
        x.innerHTML = "Message send successfully🎉"
        myFunction();
      }
      })();
    }
}


