let hamberger=document.querySelector(".hamberger");
let times=document.querySelector(".times");
let mobileNav= document.querySelector(".mobile-nav");


hamberger.addEventListener('click',function(){
   
   mobileNav.classList.add("open");
//    window.location.reload();
   
   
})

document.querySelector("#clode").addEventListener("click",function(){
    mobileNav.classList.remove("open");
})

times.addEventListener('click',function(){
    

    mobileNav.classList.remove("open");
    // window.location.reload();
})

document.getElementById("cnas").addEventListener("click",function(){
    mobileNav.classList.add("open");
})



// document.querySelector("#form").addEventListener("submit",sendEmail());
function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "d@gmail.com",
        Password : "00000000000",
        To : 'sudhirshukla1611@gmail.com',
        From : document.querySelector("#email").value,
        Subject : "New Contact from Portfolio",
        Body : "Name: "+document.querySelector("#f_name").value+" "+document.querySelector("#l_name").value
        +"<br>Email: "+document.querySelector("#email").value
        +"<br>Phone Number: "+document.querySelector("#phone").value
        +"<br>Message: "+document.querySelector("#msg").value
    }).then(
      message => alert("Message Sent Successfully, Thank You")
    );
}