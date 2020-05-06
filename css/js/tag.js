const colors = {
  p: '#388e3c',
  div: '#1565c0',
  span: '#e53935',
  section: '#f67809',
  ul: '#5e35b1',
  ol: '#fbc02d',
  header: '#d81b60',
  nav: '#64dd17',
  main: '#00acc1',
  footer: '#304ffe',
}

document.querySelectorAll('.tag').forEach(elemento => {
  const tagName = elemento.tagName.toLowerCase() // colocar todas letras em minusc

  elemento.style.borderColor = '#616161'

  if (!elemento.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.style.backgroundColor = '#616161'
    label.innerHTML = tagName
    elemento.insertBefore(label, elemento.childNodes[0])

  }
})
