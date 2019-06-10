document.addEventListener("DOMContentLoaded", init)
let timer
let status = 'not paused'
let counter = document.getElementById('counter')
let form = document.getElementById('comment-form')
let likes = document.querySelector(`ul[class='likes']`)

document.addEventListener("click", handleEvents)

function init(){
  timer = window.setInterval(function(){counter.innerText++}, 1000)
}

function handleEvents(e){
  e.preventDefault()
  if(status !== 'paused'){
    if(e.target.id === 'submit'){
      addComment()
    } else if(e.target.id === '-'){
      counter.innerText--
    } else if(e.target.id === '+'){
      counter.innerText++
    } else if(e.target.id === '<3'){
      likeNum()
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
}

function addComment(){
  let commentInput = document.getElementById('comment')
  let commentList = document.getElementById('list')
  commentList.innerHTML += `<p>${commentInput.value}</p>`
  commentInput.value = ''
}


function likeNum(){
  let likedNum = document.querySelector(`ul[class="likes"] > li[data-num="${counter.innerText}"]`)
  if(likedNum){
    let span = likedNum.querySelector('span').innerText++
  } else {
    likes.innerHTML += `<li data-num="${counter.innerText}">${counter.innerText} has been liked <span>1</span> times</li>`
  }
}
