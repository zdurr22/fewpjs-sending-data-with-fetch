// Add your code here
const destinationUrl = "http://localhost:3000/dogs"
const formData = {
    dogName: "Lola",
    dogBreed: "GoldenestDoodle"
};

const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(formData)
};

fetch("http://localhost:3000/dogs", configObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        console.log(object);
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });

function submitData(name, email) {
    const destUrl = "http://localhost:3000/users"
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    };
    fetch(destUrl, configurationObject) 
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object[ "id" ]
    })
    .catch(function(error) {
        document.body.innerHTML = error.message
    });
};