import './styles/index.css'
import './utils/dom'
import './router'

let app = document.querySelector('#mx-app')

let location = window.location
let pathname = location.pathname
if (pathname == '/') {
  app.innerHTML = `
    test
    <a class=test-go>go to list</a>
  `
}

app.addEventListener('click', (event) => {
  let target = event.target
  if (target.classList.contains('test-go')) {
    log('test')
    history.pushState(null, '', '/list')
    app.innerHTML = `
      list
      <a class=test-home>go home</a>
    `
  } else if (target.classList.contains('test-home')) {
    history.pushState(null, '', '/')
    app.innerHTML = `
      test
      <a class=test-go>go to list</a>
    `
  }
})
