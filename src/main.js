import string from './css'
let n = 1
style.innerHTML = string.substring(0, n)
css.innerText = string.substring(0, n)

let time = 100
const run = () => {
  n+=1
  if(n>string.length){
     window.clearInterval(id)
     return
  }
  style.innerHTML = string.substring(0, n)
  css.innerText = string.substring(0, n)
  css.scrollTop = css.scrollHeight

}

const play = ()=>{
  return setInterval(run,time)
}

let id = play()

btnPause.onclick=()=>{
  window.clearInterval(id)
}
btnPlay.onclick=()=>{
  id = play()
}

btnFast.onclick = ()=>{
  window.clearInterval(id)
  time = 0
  id = play()
}
btnSlow.onclick = ()=>{
  window.clearInterval(id)
  time = 300
  id = play()}
btnMiddle.onclick = ()=>{
  window.clearInterval(id)
  time = 100
  id = play()
}