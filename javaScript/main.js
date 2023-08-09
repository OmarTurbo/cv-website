const copyEmailBtn = document.querySelector('.copyMail'); // The button that copy the data
const copyNumberBtn = document.querySelector('.copyNumber'); // The button that copy the data
const emailField = document.getElementById('emailData');// The email field 
const numberField = document.getElementById('numberData');// The phone number field
// Copy Email Function

copyEmailBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(emailField.innerHTML);
    console.log("copied text " + emailField.innerHTML);
    setTimeout(() => {

        $('#alert1').removeClass('d-none')
        $('#alert1').addClass('d-block')
    }, 100)
    setTimeout(() => {
        $('#alert1').removeClass('d-block');
        $('#alert1').addClass('d-none');
    }, 1000)
});
// Copy Number Function
copyNumberBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(numberField.innerHTML);
    console.log("copied Number " + numberField.innerHTML);
    setTimeout(() => {
        $('#alert2').removeClass('d-none')
        $('#alert2').addClass('d-block')
    }, 100)
    setTimeout(() => {
        $('#alert2').removeClass('d-block');
        $('#alert2').addClass('d-none');
    }, 1000)
});

let changingPart = $('.hero-content span').offset().top; // The length from the top to the section
// changing the navbar color smoothly
$(window).scroll(() => {
    let wScroll = $(window).scrollTop();
    if (wScroll > changingPart) {
        $('nav').css('backgroundColor', '#F6F4EB');
        $('nav a').css('color', '#bdb10c')
        $('nav').css('padding', '0 30px');
    } else {
        $('nav').css('backgroundColor', 'transparent');
        $('nav a').css('color', '#fff')
        $('nav').css('padding', '0')
    };
})

//On click on the anchor tag it will move to it's section smoothly
$(".hero a[href^='#']").click((e) => {
    let aHref = e.target.getAttribute('href');
    let sectionOffset = $(aHref).offset().top;
    console.log(sectionOffset)
    $("html,body").animate({ scrollTop: sectionOffset - 100 }, 3000)
})

// To show and hide the navbar option
$('#showBtn').click(() => {
    $('nav').toggle()
})

// A function to scroll back Up to the top of the website
$(function () {
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

//Load screen function

$(document).ready(()=>{ 
    $('#loader .spinner').fadeOut(1000,()=>{
        $('#loader').fadeOut(500)
        $('body').css('overflowY','auto')
    })
})

var typed = new Typed('#mainHeader', {
    strings: ['Omar Turbo','Front-End','"Hello World!"'],
    typeSpeed:100,
    smartBackSpace:true,
    loop:true,
    startDelay:4,
  });