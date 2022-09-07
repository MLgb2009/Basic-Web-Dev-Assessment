const buttons = document.querySelector("[data-carousel-button]")
buttons.forEach(button =>{
    button.addEventListener(click,() =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex <0) newIndex = slides.children.length -1
        if (newIndex >= slides.children.length) newIndex =0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

/*for modal*/
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

