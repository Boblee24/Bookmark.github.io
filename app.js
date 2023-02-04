const navheader = document.querySelector('.header-nav')
const body = document.querySelector('body')
const toggle1 = document.querySelector('input[type = "checkbox"]')
const clicks = document.querySelectorAll('.click')
const cover = Array.from(body.querySelectorAll('.cover'))
const bookmark = body.querySelector('#hello')
const click1 = document.querySelector('.section1-clickable')
const clickArray = Array.from(click1.children)
const note = document.querySelector('.movable')
// console.log(clicks)
console.log(note.innerHTML)
console.log(clickArray[1])

clickArray[0].addEventListener('click', () => {
    console.log('big man')
    clickArray[0].classList.add('active')
    clickArray[1].classList.remove('active')
    clickArray[2].classList.remove('active')
    note.innerHTML = `<div class="movable-img">
    <img src="Images/illustration-features-tab-1.svg" alt="">
</div>
<div class="movable-note">
    <h4>Bookmark in one click</h4>
    <p>Organise your bookmark you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites</p>
    <a class="pro" href="#">More info</a>
</div>`
})
clickArray[1].addEventListener('click', () => {
    console.log('big man')
    clickArray[0].classList.remove('active')
    clickArray[1].classList.add('active')
    clickArray[2].classList.remove('active')
    note.innerHTML = `<div class="movable-img first">
    <img src="Images/illustration-features-tab-2.svg" alt="">
</div>
<div class="movable-note">
    <h4>Intelligent search</h4>
    <p>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
    <a class="pro" href="#">More info</a>
</div>`
})
clickArray[2].addEventListener('click', () => {
    console.log('big man')
    clickArray[0].classList.remove('active')
    clickArray[1].classList.remove('active')
    clickArray[2].classList.add('active')
    note.innerHTML = `<div class="movable-img second">
    <img src="Images/illustration-features-tab-3.svg" alt="">
</div>
<div class="movable-note">
    <h4>Share your bookmarks</h4>
    <p>Easily share your bookmarks and collection with others. Create ashareable link thet you can send at the click of a button.</p>
    <a class="pro" href="#">More info</a>
</div>`
})

clicks.forEach(toggle => {
    toggle.addEventListener('click', () => {
        console.log(toggle.parentNode)
        console.log(toggle.nextElementSibling.classList.toggle('remove'))
        toggle.classList.toggle('style')
    })
})

toggle1.addEventListener('click', () => {
    navheader.classList.toggle('add-nav')
})
const track = document.querySelector('.section1-movable')
const slides = Array.from(track.children)
// console.log(slides)

// const slideWidth = slides[0].getBoundingClientRect().width
// console.log(slideWidth)

// const moveSlide = (slide, index) => {
//     slide.style.left = slideWidth + index + 'px'
// }
// slides.forEach(moveSlide)