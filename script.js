
let lis = Array.from(document.getElementsByClassName("nav_li"));


for (let i = 0; i < lis.length - 1; i++) {

    lis[i].addEventListener("click", changeClass => {

        lis[i].classList.add("nav_li_clicked");

        lis.filter((value, index) => i !== index).map(el => el.classList.remove("nav_li_clicked"))

    })

}

document.getElementById("mobile_menu_btn").addEventListener("click", openMenu => {

    document.getElementsByClassName("body")[0].style.display = "none";
    document.getElementsByClassName("mobile_menu")[0].style.height = "100vh";

})

document.getElementsByClassName("close_btn_icon")[0].addEventListener("click", closeMenu => {

    document.getElementsByClassName("body")[0].style.display = "block";
    document.getElementsByClassName("mobile_menu")[0].style.height = "0";

})

document.querySelectorAll(".mob_a").forEach(el => {

    el.addEventListener("click", scrollToSection => {

        document.getElementsByClassName("body")[0].style.display = "block";
        document.getElementsByClassName("mobile_menu")[0].style.height = "0";

    })
})

document.getElementsByClassName("location_icon")[0].addEventListener("click", openLocationMenu => {
    document.getElementsByClassName("body")[0].style.display = "none";
    document.getElementsByClassName("mobile_location_menu")[0].style.height = "100vh";
})

document.getElementsByClassName("close_btn_icon")[1].addEventListener("click", closeLocationMenu => {

    document.getElementsByClassName("body")[0].style.display = "block";
    document.getElementsByClassName("mobile_location_menu")[0].style.height = "0";

})