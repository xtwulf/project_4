import { postGet } from "./post_handling";

// Object for the different API Routes
// Each Post route has an ID which is be taken over by the Submit Event 
const routes = {0: '/sentiment_analysis', 1: '/deep_cat', 2: '/default', 3: '/default'}

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    //let formText = document.getElementById('name').value
    //Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    /*
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    */


    let meaningText = document.getElementById('text').value;
    let route = routes[document.getElementById('api').value];

    if (!meaningText) {
        alert("Please fill in the field...!!!");
        return;
    }

    console.log(`Text:${meaningText}`);

    console.log(`Route:${route}`);

    postGet(meaningText,route);
}


export { handleSubmit };

