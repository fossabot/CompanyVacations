
const simpleBar = new SimpleBar(document.getElementById('bodyId'), {
autoHide: false
});

const CreateUser = document.querySelector('.loginform')
CreateUser.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = CreateUser.querySelector('.username').value 
    const password = CreateUser.querySelector('.password').value 
    post('/login', { username, password })
}) 

function post(path, data) {
    return window.fetch(path, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(res) {
        window.location = res.url
    })
}
