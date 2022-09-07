// nav

const burger = document.querySelector(".burger")

const menu = document.querySelector(".menu")

const coins = document.querySelector(".coins")

const body = document.querySelector(".bodym")

const bodyt = document.querySelector(".bodyt")

const burgerb = document.querySelector(".burgerb")

//--------- @nav //



// coins //
const btc = document.querySelectorAll(".btc")

const bbtn = document.querySelectorAll(".btc-b")

// ---------------@coins//



// @mq //

const ts = document.querySelector(".ts")

const tst = document.querySelector(".tst")

const tsi = document.querySelector(".tsi")

// T = two
const tsT = document.querySelector(".tsT")

const tstT = document.querySelector(".tstT")

const tsiT = document.querySelector(".tsiT")

//R = three

const tsR = document.querySelector(".tsR")

const tstR = document.querySelector(".tstR")

const tsiR = document.querySelector(".tsiR")

// -----------+-----@mq //



// nav //

burger.addEventListener("click", () =>{
    const opened = burger.getAttribute("open")
    const mopen = menu.getAttribute("mopen")
    console.log(opened)
    
    if(opened === "false") {
        console.log("ok warisi")
        burgerb.innerHTML=`<i class="fa-solid fa-dollar-sign"></i>`
        body.setAttribute("open", true);
        bodyt.setAttribute("open", true);
        burger.setAttribute("open", true);
        menu.setAttribute("mopen", true)
    }else {
        console.log("Wo me i don give up😭😂")
        
        burgerb.innerHTML=`<i class="fa-solid fa-bitcoin-sign"></i>`
        body.setAttribute("open", false);
        bodyt.setAttribute("open", false);
        burger.setAttribute("open", false);
        menu.setAttribute("mopen", false)
    }
});

// --------------@nav //




for (var i = 0; i < btc.length; i++) {
  btc[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active"); 
  
  current[0].className = current[0].className.replace(" active", "");
    
  this.className += " active";
  
  check()
  });
}


function check() {
for (var i = 0; i < btc.length; i++) {
    var h = btc[i].classList.contains("active")
    for (var i = 0; i < bbtn.length; i++) {
       if (btc[0].classList.contains("active")) {
           
           bbtn[0].innerHTML=` start mining <i class="fa-solid fa-angle-right"></i>`;
       }else {
           
           bbtn[0].innerHTML=`<i class="fa-solid fa-angle-right" style="color:#3b83f3;"></i>`;
           
       } 
       
       if (btc[1].classList.contains("active")) {
           bbtn[1].innerHTML=` start mining <i class="fa-solid fa-angle-right"></i>`;
       }else {
           bbtn[1].innerHTML=`<i class="fa-solid fa-angle-right" style="color:#3b83f3;"></i>`;
       }
       
       if (btc[2].classList.contains("active")) {
           bbtn[2].innerHTML=` start mining <i class="fa-solid fa-angle-right"></i>`;
           console.log("just a random dude trying to be happy😶")
       }else {
           bbtn[2].innerHTML=`<i class="fa-solid fa-angle-right" style="color:#3b83f3;"></i>`;
       }                       
       
}
        
}}
check()


window.addEventListener("resize", function() {
  //if (window.innerWidth < 700) resize.classList.remove("n");
  if (window.innerWidth < 761) {
      console.log("Positive-thinking: tobs you can overcome anything 😩")
      ts.classList.remove("n");
      tsi.classList.remove("nimg");
      tst.classList.remove("ntxt");
      
      // two
      tsT.classList.remove("nt");
      tsiT.classList.remove("nimgt");
      tstT.classList.remove("ntxtt");
      
      //three
      tsR.classList.remove("n");
      tsiR.classList.remove("nimg");
      tstR.classList.remove("ntxt");
      
  }else {
      console.log("Encouragement: tobs you are a fucking good dev 😶(Me: thanks🤧)")
      
  } 
  
  
});
