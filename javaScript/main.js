const copyEmailBtn = document.querySelector('.copyMail'); // The button that copy the data
const copyNumberBtn = document.querySelector('.copyNumber'); // The button that copy the data
const emailField = document.getElementById('emailData');// The email field 
const numberField = document.getElementById('numberData');// The phone number field
// Copy Function
function copyEmail(){
    navigator.clipboard.writeText(emailField.innerHTML);
    console.log("copied text "+ emailField.innerHTML);
    setTimeout(()=>{
        
        $('#alert1').removeClass('d-none')
        $('#alert1').addClass('d-block')
    },100)
    setTimeout(() => {
        $('#alert1').removeClass('d-block');
        $('#alert1').addClass('d-none');
    }, 1000)
    
};
function copyNumber(){
    navigator.clipboard.writeText(numberField.innerHTML);
    console.log("copied Number "+ numberField.innerHTML);
    setTimeout(()=>{        
        $('#alert2').removeClass('d-none')
        $('#alert2').addClass('d-block')
    },100)
    setTimeout(() => {
        $('#alert2').removeClass('d-block');
        $('#alert2').addClass('d-none');
    }, 1000)

};
copyEmailBtn.addEventListener("click",copyEmail);
copyNumberBtn.addEventListener("click",copyNumber);

let changingPart = $('.hero-content span').offset().top;
let heroPart = $('.hero').offset().top;

$(window).scroll(()=>{
    let wScroll = $(window).scrollTop();
    if(wScroll > changingPart){
        $('nav').css('backgroundColor','#F6F4EB');
        $('nav a').css('color','#bdb10c')
        $('nav').css('padding','0 30px');
    }else{
        $('nav').css('backgroundColor','transparent');
        $('nav a').css('color','#fff')
        $('nav').css('padding','0')
    };
})


$(".hero a[href^='#']").click((e)=>{
    let aHref = e.target.getAttribute('href');
    let sectionOffset = $(aHref).offset().top;
    console.log(sectionOffset)
    $("html,body").animate({scrollTop : sectionOffset - 100},3000)
})

$('#showBtn').click(()=>{
    $('nav').toggle()
})

$(function() {
    $(window).scroll(function () {
     if ($(this).scrollTop() > 500) {
       $('#upBtn').fadeIn();
     } else {
       $('#upBtn').fadeOut();
     }
    });
    $('#upBtn').click(function () {
     $('html, body').animate({ scrollTop: 0 }, 2000);
    });
   });