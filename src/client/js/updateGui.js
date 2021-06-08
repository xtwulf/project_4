function updateGui(route, route_name, data) {

    //console.log(`Update GUI for the ${route} route. Route name is ${route_name}`);
    console.log(`Data in GUI function: ${data}`)

    

    document.getElementById('api_type').innerHTML = route_name;
    document.getElementById('categorization_code').innerHTML = route_name;
    document.getElementById('categorization_label').innerHTML = route_name;
    document.getElementById('categorization_abs_rel').innerHTML = route_name;
    document.getElementById('categorization_rel').innerHTML = route_name;
    document.getElementById('categorization_polarity').innerHTML = route_name;
    

}

export { updateGui };
