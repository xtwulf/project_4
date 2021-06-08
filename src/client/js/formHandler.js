import { postGet } from "./post_handling";
import { postData } from "./post_handling";

// Object for the different API Routes
// Each Post route has an ID which is be taken over by the Submit Event 
const routes = {0: {route: '/sentiment_analysis', name: 'Sentiment Analysis'}, 1: {route: '/deep_cat', name: 'Deep Categorization'}, 2: {route_id: '/default', name: 'Default'}, 3: {route_id: '/default', name: 'Default'}}

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
    let route_id = document.getElementById('api').value;
    let route = routes[route_id];
    console.log("Route Infos",route);


    if (!meaningText) {
        alert("Please fill in the field...!!!");
        return;
    }

    console.log(`Text:${meaningText}`);

    console.log(`Route:${route.route}`);
    console.log(`Route-ID:${route_id}`);
    

    postGet(meaningText,route.route,route.name);
    //postData(route,meaningText);


}


export { handleSubmit };

