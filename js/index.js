//main-slider in head
let slideContainer = document.querySelector('.slider-header-body')
let slideArr = [...slideContainer.children]
let sliderTitle = document.querySelector('.slider-title')
let sliderSubtitle = document.querySelector('.slider-subtitle')
const sliderData = {
    title: ['MosBuild 2021','VIPORTE', 'Двери из массива дуба', 'Двери из массива бука', 'Раздвижные перегородки'],
    subtitle: ['Итоги выставки','Роскошная коллекция от фабрики Альверо', 'Классические двери из традиционной твердой древесины', 'Деревянные двери с отличными свойствами и доступной ценой','Облегченные конструкции из дуба для зонирования пространства'],
}
sliderTitle.innerText = sliderData.title[0]
sliderSubtitle.innerText = sliderData.subtitle[0]

window.onload = () => {
    let observer = new MutationObserver(() => {
        slideArr.forEach((item) => {
            if(item.classList.contains('uk-active')) {
                sliderTitle.innerText = sliderData.title[item.dataset.index]
                sliderSubtitle.innerText = sliderData.subtitle[item.dataset.index]
            }
        })
    });
    observer.observe(slideContainer, {
        subtree: true,
        attributes: true
    });
}
