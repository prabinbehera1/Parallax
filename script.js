const title = document.querySelector('.title')
const tree1 = document.querySelector('.tree1')
const tree2 = document.querySelector('.tree2')
const bush3 = document.querySelector('.bush3')
const bush4 = document.querySelector('.bush4')
// const hill1 = document.querySelector('.hill1')
// const hill2 = document.querySelector('.hill2')
// const flowers = document.querySelector('.flowers')

document.addEventListener('scroll', function() {
    let value = window.scrollY
    title.style.marginTop = value * 1.1 + 'px'

    tree1.style.marginLeft = -value + 'px'
    tree2.style.marginRight = -value + 'px'

    bush3.style.marginLeft = -value * 0.7 + 'px'
    bush4.style.marginRight = -value * 0.7+ 'px'

    // hill1.style.marginBottom = -value * 1.1 + 'px'
    // hill2.style.marginBottom = -value * 1.1 + 'px'

    // flowers.style.marginBottom = -value * 1.5 + 'px'
    
})