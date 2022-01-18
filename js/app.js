let panels = document.querySelectorAll('.panel');


panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveAll()
    panel.classList.add('active')
  })
})

function removeActiveAll(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}