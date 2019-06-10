document.addEventListener("DOMContentLoaded", init)
let timer
let status = 'paused'
let counter = document.getElementById('counter')
let form = document.getElementById('comment-form')

document.addEventListener("click", handleEvents)

function init(){
  timer = window.setInterval(increaseCounter, 1000)
}

function increaseCounter(){
  let num = parseInt(counter.innerText)
  counter.innerText = num + 1
}

function handleEvents(e){
  e.preventDefault()
  if(status !== 'paused'){
    if(e.target.id === 'submit'){
      addComment()
    }
  }

  if(e.target.id === 'pause'){
    pauseApp(e)
  }
}

function pauseApp(e){
  if(e.target.innerText === 'pause'){
    e.target.innerText = 'resume'
    clearInterval(timer)
    status = 'paused'
  } else {
    e.target.innerText = 'pause'
    init()
    status = 'not paused'
  }
  console.log(e.target)
}

function addComment(){
  let commentInput = document.getElementById('comment')
  let commentList = document.getElementById('list')
  commentList.innerHTML += `<p>${commentInput.value}</p>`
  commentInput.value = ''
}
