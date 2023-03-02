var typingEffect = new Typed(".typing-text",{
    strings: ["Cześć!", "Jestem Adam!"],
    loop:true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

const mobileNav = document.querySelector(".top-bar-items");
const burgerBtn = document.querySelector(".burger")

const topItems = [
document.querySelector("a.top_bar_item"),
document.querySelector("a.top_bar_item.i1"),
document.querySelector("a.top_bar_item.i2"),
document.querySelector("a.top_bar_item.i3"),
document.querySelector("a.top_bar_item.i4"),
document.querySelector("a.top_bar_item.i5")
];
burgerBtn.addEventListener("click", function(){
    mobileNav.classList.toggle('active')
    burgerBtn.classList.toggle('active')
})

topItems.forEach((item) => {
    item.addEventListener("click", function() {
      mobileNav.classList.remove('active');
      burgerBtn.classList.remove('active');
    });
  });
  