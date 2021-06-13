function updateGui(route, route_name, data) {

    //console.log(`Update GUI for the ${route} route. Route name is ${route_name}`);
    console.log ('::: GUI function running');
    console.log(`Data in GUI function: ${data[0].code}`)
    for (const [key, value] of Object.entries(data[0])) {
        console.log(`${key}: ${value}`);
      }

    

    document.getElementById('api_type').innerHTML = route_name;
    document.getElementById('categorization_code').innerHTML = data[0].code;
    document.getElementById('categorization_label').innerHTML = data[0].label;
    document.getElementById('categorization_abs_rel').innerHTML = data[0].abs_relevance;
    document.getElementById('categorization_rel').innerHTML = data[0].relvance;
    document.getElementById('categorization_polarity').innerHTML = "no data";
    

}

export { updateGui };
