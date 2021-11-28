//main-slider in head
let mainContainer = document.querySelector('.main-header-slider')
let leftbtn = document.querySelector('.left-arrow-btn')
let rightbtn = document.querySelector('.right-arrow-btn')
let sliderContainer = document.querySelector('.slider-nav-container')
let sliderTitle = document.querySelector('.slider-title')
let sliderSubTitle = document.querySelector('.slider-subtitle')
let sliderAboutLink = document.querySelector('.about-btn')

const sliderData = {
    title: ['MosBuild 2021','VIPORTE', 'Двери из массива дуба', 'Двери из массива бука', 'Раздвижные перегородки'],
    subtitle: ['Итоги выставки','Роскошная коллекция от фабрики Альверо', 'Классические двери из традиционной твердой древесины', 'Деревянные двери с отличными свойствами и доступной ценой','Облегченные конструкции из дуба для зонирования пространства'],
    slides: ['./assets/icons/slider/main-header-slider/1.jpg', './assets/icons/slider/main-header-slider/2.jpg', './assets/icons/slider/main-header-slider/3.jpg', './assets/icons/slider/main-header-slider/4.jpg', './assets/icons/slider/main-header-slider/5.jpg']
}
let currentSlide = 0
sliderTitle.innerText = sliderData.title[0]
sliderSubTitle.innerText = sliderData.subtitle[0]
mainContainer.style.background = `url(${sliderData.slides[0]})`
function sliderSwitch(slide) {
    sliderTitle.innerText = sliderData.title[slide]
    sliderSubTitle.innerText = sliderData.subtitle[slide]
    mainContainer.style.background = `url(${sliderData.slides[slide]})`
}
leftbtn.addEventListener('click', ()=> {
    let slide = currentSlide <= 0 ? currentSlide = 4 : currentSlide--
    sliderSwitch(slide)
})
rightbtn.addEventListener('click', ()=> {
    let slide = currentSlide > 4  ? currentSlide = 0 : currentSlide++
    sliderSwitch(slide)
})

//catalogBoard-sk-boards-slider
// let skArray = ['dub.png','dub_bel.png','dub_belser.png','dub_belzol.png','oreh_2.png','orehchern.png','orehzoloto.png','sahara_1.png', 'sednoch_0.png','vengeser_0.png','vintaj.png','yantar_1.png']
// let modalWindowSB = document.querySelector('.skirting-board-modal-boards')
// let modalWImage = document.querySelector('.skirting-board-modal-boards-img')
// const catalogContainer = document.querySelector('.catalog-block')


