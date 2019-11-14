export const redoLinkClickEvent = (router) => {
  let body = document.querySelector('body')
  body.addEventListener('click', (event) => {
    let target = event.target
    if (target.tagName.toLowerCase() == 'a') {
      event.preventDefault()
      let path = target.getAttribute('href')
      router.push(path)
    }
  })
}
