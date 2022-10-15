// clock

const stundenZeiger = document.querySelector('[data-stunden-zeiger]')
const minutenZeiger = document.querySelector('[data-minuten-zeiger]')
const sekundenZeiger = document.querySelector('[data-sekunden-zeiger]')

setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date()

    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(sekundenZeiger, secondsRatio)
    setRotation(minutenZeiger, minutesRatio)
    setRotation(stundenZeiger, hoursRatio)
}

function setRotation(zeiger, rotationRatio) {
    zeiger.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()

// set clock size on mobile landscape

const clock = document.querySelector('.uhr')

if(window.matchMedia('(orientation: landscape)') && 'ontouchstart' in document.documentElement) {
    clock.classList.add('landscape-mobile')
} else {
    clock.classList.remove('landscape-mobile')
}