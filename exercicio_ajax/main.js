document.addEventListener('DOMContentLoaded', function() {
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repositorios = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const profile = document.querySelector('#profile');

    fetch('https://api.github.com/users/carolsixel')
        .then(function(response) {
            return response.json();
        })
        .then (function(json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repos.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            profile.href = json.html_url;
        })
})