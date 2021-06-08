// postData --> nur async Funktion
// POST request wird dann über postGet ausgeführt

import {updateGui} from './updateGui.js';

const postData = async ( url = '', data = {})=>{
    console.log('::: postData running :::');
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  const newData = await response.json();
  const cat_list = await newData.category_list;

  console.log("Post data finished --> Cat List:", cat_list);
  


  try {
      // writing the Server response in the newData variable
      /*
      const newData = await response.json();
      const cat_list = await newData.category_list;
      console.log("Cat List:", cat_list);
      */

      // checking the response for errors
      // console.log("New Data:",newData);

      if (newData.status.code !=0 && newData.status.code !=666 ) {     
        throw {
          name: 'Application Error',
          message: 'Sorry, something went wrong...!',
          code: 'Error: ' + newData.status.code
        }
      }

      if (newData.status.code == 666) {
        console.log("number of the beast");
        throw {
          name: 'Application Error',
          message: 'Service unavailable',
          code: 'Error:' + newData.status.code
        }
      }
      
      // return the received date for the combined function     
      return newData;
      
      
      
    }
    // Error handling
    catch(error) {
      let message = error.name + "\n" + error.message;
      alert("Error:" + message);
    }

    
  };
  
// 

  // Calling the postData function via Submit Event here

function postGet(text,route, route_name){

     // Making the POST request on the choosen route
    var data = postData(route, {text: text});

    updateGui(route, route_name, data);
  
    //let test = await updateGui(route, route_name, data);
    //console.log("Test:", test);
    

    
  }
   
 
    // updateGui(route, route_name, data);    

  export { postGet };
  export { postData }