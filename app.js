function getData(endPoint, callback) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', endPoint, true)
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.responseText))
        }
    }
    setTimeout(() => {
       xhr.send() 
    }, Math.floor(Math.random() * 3000 + 1000));
}

getData('./actors.json', (data) => {
    console.log(data)
        getData('./directors.json', (data) => {
            console.log(data)
                getData('./movies.json', (data) => {
                    console.log(data)
                })
        })
})
