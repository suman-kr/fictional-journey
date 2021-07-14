function apiCall(url) {
    return new Promise((res, reject) => {
        fetch(url).then(resp => res(resp.json()))
    })
}

async function getUsers() {
    const users = await apiCall("https://jsonplaceholder.typicode.com/users");
    let id = document.getElementById("table");
    if (id) {
        let tableData = users.map(user => {
            const tr = document.createElement("tr")
            let userId = document.createElement("td");
            userId.innerText = user.id
            tr.appendChild(userId)
            let name = document.createElement("td");
            name.innerText = user.name;
            tr.appendChild(name)
            let userName = document.createElement("td");
            userName.innerText = user.username;
            tr.appendChild(userName);
            let email = document.createElement("td");
            email.innerText = user.email;
            tr.appendChild(email)
            let phone = document.createElement("td");
            phone.innerText = user.phone;
            tr.appendChild(phone)
            let website = document.createElement("td");
            website.innerText = user.website;
            tr.appendChild(website)
            id.appendChild(tr)
        })
    }


}

async function getPosts() {
    const posts = await apiCall("https://jsonplaceholder.typicode.com/posts");
    let id = document.getElementById("post")
    if (id) {
        posts.map(async post => {
            let col = document.createElement("div")
            col.className += "col-md-4"
            let card = document.createElement("div")
            card.className += "card"
            let postBody = document.createElement("div")
            postBody.className += "card-body"
            const user = await apiCall(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
            let title = document.createElement("h5")
            title.className += "card-title"
            title.innerText = post.title
            postBody.appendChild(title)
            let author = document.createElement("h6")
            author.className += "card-subtitle mb-2 text-muted"
            author.innerText = user.name
            postBody.appendChild(author)
            let content = document.createElement("p")
            content.className += "card-text"
            content.innerText = post.body;
            postBody.appendChild(content)
            card.appendChild(postBody)
            col.appendChild(card)
            id.appendChild(col)
        })
    }


}

getUsers()
getPosts()