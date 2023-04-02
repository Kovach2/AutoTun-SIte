// change SideBar

let sidebarPoints = $(".sidebar__progress--text")
function cheakScroll(){
    if(window.scrollY < 1000 && $(sidebarPoints[1]).hasClass("active")){
        $(sidebarPoints[0]).addClass("active");
        $(sidebarPoints[1]).removeClass("active");
    }
    if(window.scrollY > 1000 && window.scrollY < 1999){
        $(sidebarPoints[0]).removeClass("active");
        $(sidebarPoints[1]).addClass("active");
        if($(sidebarPoints[2]).hasClass("active")){
            $(sidebarPoints[2]).removeClass("active");
            $(sidebarPoints[1]).addClass("active");
        }
    }else if(window.scrollY > 2000 && window.scrollY < 2999){
        $(sidebarPoints[1]).removeClass("active");
        $(sidebarPoints[2]).addClass("active");
        if($(sidebarPoints[3]).hasClass("active")){
            $(sidebarPoints[3]).removeClass("active");
            $(sidebarPoints[2]).addClass("active");
        }
    }
    else if(window.scrollY > 3000 && window.scrollY < 3500){
        $(sidebarPoints[2]).removeClass("active");
        $(sidebarPoints[3]).addClass("active");
        if($(sidebarPoints[4]).hasClass("active")){
            $(sidebarPoints[4]).removeClass("active");
            $(sidebarPoints[3]).addClass("active");
        }
    }
    else if(window.scrollY > 3700){
        $(sidebarPoints[3]).removeClass("active");
        $(sidebarPoints[4]).addClass("active");
    }
}
cheakScroll()
$(window).scroll(function () { 
    cheakScroll()
});

// Animate About

let menuItems = $(".list__menu__item--container")
$(".list__menu__item--container").click(function (e) { 
    if($(e.currentTarget).hasClass("active"))
        $(e.currentTarget).removeClass("active");
    else
        $(e.currentTarget).addClass("active")
});


// Slider

$('.products__cards').slick({
    infinite: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    prevArrow: $(".slider__button.prev"),
    nextArrow: $(".slider__button.next")
});