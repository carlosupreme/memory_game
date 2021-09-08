const d = document,
$cards = d.querySelectorAll('.card')


for (let card of $cards) {
  card.addEventListener('click',()=> {
    card.classList.toggle('clicked')
  })
}