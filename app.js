// setTimeout(changeText, 3000)


// function changeText() {
//     document.querySelector('h1').textContent = 'Hello from callback'
// }

// const timerID = setTimeout(changeText, 3000)

// // clearTimeout
// document.querySelector('.btn').addEventListener('click', () => {
//     console.log(timerID)
//     clearTimeout(timerID)
//     console.log('Timeout cleared')
// })

// Set Interval
// const intervalID = setInterval(myCallback, 1000)
//  function myCallback() {
//     console.log(Date.now())
//  }

// let intervalID

// const startChange = () => {
//     if (!intervalID) {
//         intervalID = setInterval(changeColor, 2000)
//     }
// }

// const changeColor = () => {
//     if (document.body.style.backgroundColor === 'black') {
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     } else {
//         document.body.style.backgroundColor = 'black'
//         document.body.style.color = 'white'
//     }
// }

// const stopChange = () => {
//     clearInterval(intervalID)
//  }
 
// document.getElementById('stop').addEventListener('click', stopChange)
// document.getElementById('start').addEventListener('click', startChange)

// const toggle = (e) => {
//     e.target.classList.toggle('danger')
// }

// document.querySelector('.btn').addEventListener('click', toggle)

// REPLICATE SERVER BEHAVIOUR WHEN FETCHING DATA ASYNCHRONOUSLY

// const posts = [
//     {title: 'Post one', body: 'This is the post one'},
//     {title: 'Post two', body: 'This is the post two'}
// ]

// // Mimic server's behavior by using setTimeout

// // Create Post
// const createPost = (post, callback) => {
//     setTimeout(() => {
//        posts.push(post) 
//        callback()
//     }, 2000);
// }

// // Get Posts
// const getPosts = () => {
//     setTimeout(() => {
//      posts.forEach((post) => {
//         // Create a new DOM element
//         const div = document.createElement('div')
//         // InnerHTML
//         div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
//         // Add to the DOM
//         document.getElementById('posts').appendChild(div)
//      })   
//     }, 1000);
// }

// createPost({title: 'Post three', body: 'This is the post three'}, getPosts)

// Initialize a new HTTP request

// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.github.com/users/Sergei1201/repos', true)

// readyState
// 0 - request has not been initialized
// 1 - server connection has been established
// 2 - request has been received 
// 3 - processing request
// 4 - request has been processed and response is ready

// xhr.onreadystatechange = function() {
//     if (this.readyState === 4 && this.status === 200) {
//         // Get the data from the server / json file
//         const data = JSON.parse(this.responseText)
//         // Get the data, loop through it and display in the DOM
//         data.forEach(repo => {
//           // Create an li for each movie
//           const li = document.createElement('li')
//           // InnerHTML
//           li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`  
//           // Get ul and append child
//           document.getElementById('results').appendChild(li)
//         });
//     }
// }
// // Send the request
// xhr.send()

// Create a new XMLHttpRequest


const btn = document.getElementById('btn')
const jokes = document.getElementById('jokes')

// Add Event Listener

const getJokes = () => {
    // Create a New XMLHttpRequest 
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true)
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          jokes.innerHTML = JSON.parse(this.responseText).value
        } else {
            jokes.innerHTML = 'Something Went Wrong...'
        }
    }

    xhr.send()
}

btn.addEventListener('click', getJokes)
document.addEventListener('DOMContentLoaded', getJokes)

