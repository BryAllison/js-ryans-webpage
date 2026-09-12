const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = "red";

const about = document.querySelector('#about') // id="about"
about.style.color = 'orange'

const active = document.querySelector('.active') // class="active"
active.style.color = 'blue'

const link = document.querySelector('#Link1')
link.style.textDecoration = 'underline'

const contact = document.querySelector('#contact')

contact.addEventListener('mouseover', () => {
    //contact.parentElement.style.backgroundColor = 'lightblue'
    contact.closest('nav').style.backgroundColor = 'lightblue'
})
