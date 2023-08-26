const button = document.querySelector('button');
const body = document.querySelector('body');
const heart = document.querySelector('.heart');

button.addEventListener('click', () => {
    setInterval(() => {
        body.style.backgroundColor = ligntColor()
        button.style.backgroundColor = generateColor()
        animation()
    },1000)
})

function generateColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}
function ligntColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},.4)`
}

function animation(){
    const div = document.createElement('div');
    div.innerHTML = `<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-6 h-6"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>`
  div.style.position = 'absolute'
  div.style.top = `${Math.floor(Math.random() * 60)}rem`;
  div.style.left = `${Math.floor(Math.random() * 60)}rem`;
  heart.appendChild(div)
  const svgs = document.querySelectorAll('svg')
  svgs.forEach(svg => {
    const color = generateColor()
    svg.style.fill = color
    svg.style.stroke = color
  })
}