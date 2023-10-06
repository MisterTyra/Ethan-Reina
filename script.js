
function afficher(){
    fetch('https://randomuser.me/api/?results=100')
    .then(res => res.results())
    .then(results => 
        {
            document.querySelector("h1").innerHTML = results.name;
        })
    }