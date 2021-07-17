// Header nav effect
const header = document.querySelector('.header')
const headerHoverEffect = document.querySelector('.header__hover')

console.log('header', header)

header.onmousemove = e => {
  headerHoverEffect.style.transform = `translateX(${e.clientX - 50}px`
}

header.onmouseenter = () => {
  headerHoverEffect.classList.add('header__hover_active')
}

header.onmouseleave = () => {
  headerHoverEffect.classList.remove('header__hover_active')
}
