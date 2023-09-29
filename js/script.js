gsap.registerPlugin(ScrollTrigger)

gsap.to(".seneca-p-text",{
    scale:1,
    opacity:1,
duration: .5,
scrollTrigger:{
    trigger:".seneca-p-text"
}
})

// Animation 
gsap.to("#s-heading", {
    top: -267,
    duration: .8,
    delay: .5
})

gsap.to(".carousel-caption", {
    opacity: 1,
    duration: .8,
    delay: 1,
})

gsap.to("#philo-heading", {
    delay: .2,
    scale: 1,
    stagger: 1
})
gsap.to("#login", {
    duration: 1,
    dealy: .7,
    ease: "fade",
    opacity: 1
})
gsap.to("#Signup", {
    duration: .2,
    dealy: .7,
    scale: 1
})

// OffNavbar
var offNavbar = document.querySelector(".offer-navbar");

offNavbar.addEventListener("click", function () {
    if (offNavbar.style.display = "block") {
        offNavbar.style.display = "none"
        mainNavbar.style.top = "0"
    }
    else {
        offNavbar.style.display = "block"
    }
})

// Main Navbar

var mainNavbar = document.querySelector(".main-navbar");
var navBrand = document.querySelector(".navbar-brand")
window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 50) {
        mainNavbar.style.top = "0";
        mainNavbar.style.background = "white"
        navBrand.style.color = "#f84616"
    }
    else {
        mainNavbar.style.top = "35px"
        mainNavbar.style.background = "transparent"
        offNavbar.style.display = "block"
        navBrand.style.color = "#000"
    }
})


// time 
function calculateTime() {
    var date = new Date();
    var day = date.getDay()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var anpm = "pm";

    if (anpm > 12) {
        ampm = ampm - 12;
        ampm = "am";
    }
    else {
        ampm = "pm";
    }

    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    document.getElementById("inner-para").innerHTML = hour + ":" + minute + "  " + anpm; 
    document.getElementById("inner-para").style.color = "#f84616"
    setTimeout(calculateTime, 1000)
}
calculateTime()



// Cliked function 

function myFunc() {
    window.open("ShopAddCart.html")
    document.getElementById().style.display = "block";
}



// Form Validation

// Sign Up


function mySignupForm() {
    var firstName = document.myForm.firstname.value;
    var firstName = document.myForm.firstname.value;
    var lastName = document.myForm.lastname.value;
    var Email = document.myForm.email.value;
    var Password = document.myForm.password.value;
    var Cpassword = document.myForm.Cpassword.value;
    // var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var input1 = document.querySelector(".input1");
    var input2 = document.querySelector(".input2");
    var input3 = document.querySelector(".input3");
    var input4 = document.querySelector(".input4");
    var input5 = document.querySelector(".input5");
    var atPosition = Email.indexOf('@');
    var dotPosition = Email.indexOf('.');

    var minimum = 8;
 



    if (firstName == "" || firstName == "undefined" || firstName == null) {
        // alert("Name required.")
        error1.innerHTML = "First name is required."
        error1.style.display = "block"
        input1.style.border = "1px solid red"
        error1.style.color = "red"

        input1.addEventListener("click", function(){
            // this.focus();
            error1.style.display = "none"
            input1.style.border = "1px solid grey"
        })
        return false
    }
    // else if (firstName.value >= 1) {
    //     error1.style.display = "none"
    //     input1.style.border = "1px solid green"
    // }

    // else if (firstName?.length > 0 ||  firstName[0] === firstName[0].toUpperCase()){
    //     // input1.style.border = "1px solid red"
    //     // error1.style.display = "none"
    //     // error1.innerHTML = "First Letter of your name must be capital.";
    //     // error1.style.display = "block"
    //     // error1.style.color = "red";
    //     // return false
    // }


    else if (lastName == "" || lastName == "undefined" || lastName == null) {
        input1.style.border = "1px solid grey"
        error1.style.display = "none"
        input2.style.border = "1px solid red"
        error2.innerHTML = "Last name is required."
        error2.style.display = "block"
        error2.style.color = "red"
        
        input2.addEventListener("click", function(){
            // this.focus();
            error2.style.display = "none"
            input2.style.border = "1px solid grey"
        })
        return false
    }
    // else if (lastName?.length > 0 ||  lastName[0] === lastName[0].toUpperCase()){
    //     input1.style.border = "1px solid grey"
    //     error1.style.display = "none"
    //     error2.innerHTML = "First Letter of your name must be capital";
    //     error2.style.display = "block"
    //     error2.style.color = "red"
    //     return false
    // }

    else if (Email == "") {
        input2.style.border = "1px solid grey"
        input3.style.border = "1px solid red"
        error3.innerHTML = "Email name is required."
        error3.style.display = "block"
        error3.style.color = "red"
        input3.addEventListener("click", function(){
            // this.focus();
            error3.style.display = "none"
            input3.style.border = "1px solid grey"
        })
        return false
    }
    
    
    else if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= Email.length) {
        error3.innerHTML = "Enter a valid a email.";
        error3.style.display = "block";
        error3.style.color = "red";
        input3.style.border = "1px solid red"
        // alert("Enter a valid email")
        input3.addEventListener("click", function(){
            // this.focus();
            error3.style.display = "none"
            input3.style.border = "1px solid grey"
        })
        return false
    }

  
// Password

else if(  Password == "" || Password== "undefined" || Password == null){
    input1.style.border = "1px solid grey"
    error1.style.display = "none"
    error4.innerHTML = "Password is required";
    error4.style.display = "block"
    input4.style.border = "1px solid red"
    error4.style.color = "red"      
    input4.addEventListener("click", function(){
        // this.focus();
        error4.style.display = "none"
        input4.style.border = "1px solid grey"
    }) 
}
// else if(  Password !=  /^[A-Za-z]\w{7,14}$/ ){
//     input1.style.border = "1px solid grey"
//     error1.style.display = "none"
//     error4.innerHTML = "Password must be contain special charactor and number";
//     input4.style.border = "1px solid red"
//     error4.style.display = "block"
//     error4.style.color = "red"    
//     input4.addEventListener("click", function(){
//         // this.focus();
//         error4.style.display = "none"
//         input4.style.border = "1px solid grey"
//     })    
// }
else if( Password.length < 8){
    input1.style.border = "1px solid grey"
    error1.style.display = "none"
    error4.innerHTML = "Password must be 8 charactor";
    input4.style.border = "1px solid red"
    error4.style.display = "block"
    error4.style.color = "red"    
    input4.addEventListener("click", function(){
        // this.focus();
        error4.style.display = "none"
        input4.style.border = "1px solid grey"
    })    
    return false
}






else if(  Cpassword == "" || Cpassword== "undefined" || Cpassword == null){
    input1.style.border = "1px solid grey"
    error1.style.display = "none"
    error5.innerHTML = "Confirm password is required";
    error5.style.display = "block"
    input5.style.border = "1px solid red"
    error5.style.color = "red"  
      input5.addEventListener("click", function(){
        // this.focus();
        error5.style.display = "none"
        input5.style.border = "1px solid grey"
    })    
    return false     
}
// else if(Cpassword.length < 8){
//     input1.style.border = "1px solid grey"
//     error1.style.display = "none"
//     error5.innerHTML = "Confirm ";
//     error5.style.display = "block"
//     input5.style.border = "1px solid red"
//     error5.style.color = "red"  
//       input5.addEventListener("click", function(){
//         // this.focus();
//         error5.style.display = "none"
//         input5.style.border = "1px solid grey"
//     })    
//     return false     
// }
else if(Cpassword != Password){
    input1.style.border = "1px solid grey"
    error1.style.display = "none"
    input5.style.border = "1px solid red"
    error5.innerHTML = "Password is not matched";
    error5.style.display = "block"
    error5.style.color = "red" 
      input5.addEventListener("click", function(){
        // this.focus();
        error5.style.display = "none"
        input5.style.border = "1px solid grey"
    })    
    return false      
}

}

// My Login Form

function myLoginForm(){
    var LoginEmail = document.MyLoginForm.email.value;
    var LoginPassword = document.MyLoginForm.LoginPassword.value;
    var LoginatPosition = LoginEmail.indexOf('@');
    var LogindotPosition = LoginEmail.indexOf('.');
    var LoginError1 = document.getElementById("LoginError1");
    var LoginError2 = document.getElementById("LoginError2");
    var LoginInput1 = document.querySelector(".LoginInput1");
    var LoginInput2 = document.querySelector(".LoginInput2");

    
     if (LoginEmail == "" ) { 
        LoginError1.innerHTML = "Email is required."
        LoginError1.style.color = "red"
        LoginInput1.style.border = "1px solid red"
        LoginError1.style.display = "block"
        LoginInput1.addEventListener("click", function(){
            // this.focus();
            LoginError1.style.display = "none";
            LoginInput1.style.border = "1px solid grey";
        })
        return false
    }

    else if (LoginatPosition < 1 || LogindotPosition < LoginatPosition + 2 || LogindotPosition + 2 >= LoginEmail.length) {
        LoginError1.innerHTML = "Email is not valid.";
        LoginError1.style.color = "red";
        LoginInput1.style.border = "1px solid red";
        LoginError1.style.display = "block"
        LoginInput1.addEventListener("click", function(){
            // this.focus();
            LoginError1.style.display = "none";
            LoginInput1.style.border = "1px solid grey";
        })
        return false
    }
 
    else if( LoginPassword ===  ""){
        LoginError2.innerHTML ="Password is required.";
        LoginError2.style.color="red";
        LoginInput2.style.border= '1px solid red';
        LoginError2.style.display = "block"
        LoginInput2.addEventListener('click', ()=>{
            //this.focus()
            LoginError2.style.display='none' ;
            LoginInput2.style.border ='1px solid grey ';
            });
    }
    else if( LoginPassword.length < 8){
        LoginError2.innerHTML ="Password must be more than 8 charactor!";
        LoginError2.style.color="red";
        LoginInput2.style.border= '1px solid red';
        LoginError2.style.display = "block"
        LoginInput2.addEventListener('click', ()=>{
            //this.focus()
            LoginError2.style.display='none' ;
            LoginInput2.style.border ='1px solid grey ';
            });
    }


}


// Password Show 


var eyeShow = document.getElementById("clickShow")
eyeShow.addEventListener("click", function(){
    // var eyeicon = document.getElementById()
        if(eyeShow.classList == "bi-eye"){
            eyeShow.classList == "bi-eye-slash"
            eyeShow.remove == "bi-eye"
        }
        else{
            eyeShow.classList == "bi-eye"
            eyeShow.remove == "bi-eye-slash"
        }
   
})











// function addItemCart(){
//     var ItemCart = document.getElementById("addItemCart");
//     if(cartIcon.classList == "bi bi-bag"){
//         // cartIcon.addEventListener.classList = "badge";
//         alert("checked")
//     }
//      else{
//         cartIcon.addEventListener.classList = "bi bi-bag"

//     }
// }
// addItemCart()

// var cartIcon = document.getElementById("")
// var cartIcon = document.querySelector(".bi bi-bag")
// addItemCart.addEventListener("click", function () {
//     if(cartIcon.classList = "bi bi-bag"){
//             cartIcon.add.classList = "badge rounded-pill"
//             // alert("if")
//         }
//         else{
//             cartIcon.add.classList = "bi bi-bag"
//             alert("else")
//     }
// })


// Owl Carousel

//  $('.owl-carousel').owlCarousel({
//       margin: 15,
//       nav: true,
//       navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
//       responsive: {
//         0: {
//           items: 1
//         },
//         600: {
//           items: 3
//         },
//         1000: {
//           items: 3
//         }
//       }
//     });



// Seneca Carousel 


















//Locomotive Scroll

// function Loco(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".Smooth-Scroll"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".Smooth-Scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy(".Smooth-Scroll", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector(".Smooth-Scroll").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }

// Loco()

