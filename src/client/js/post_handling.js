// postData --> nur async Funktion
// POST request wird dann über postGet ausgeführt

const postData = async ( url = '', data = {})=>{
    console.log('::: postData running :::');
    console.log("URL:",url);
    console.log("Data:", data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });
  
  try {
      // writing the Server response in the newData variable
      const newData = await response.json();

      // checking the response for errors
      console.log("New Data:",newData);
      console.log(newData.status);

      

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
      console.log("NewData:",newData);
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

function postGet(text,route){
    console.log('postGet');
    //let text = document.getElementById('text').value;
    /*
    // moved check in formHandling
    if (!text) {
        alert("Please fill in the field...!");
        return;
    }
    */
    console.log("Text:",text);
    
     // Making the POST request on the /sentiment_analysis route
    //postData('/sentiment_analysis', {text:text});
    postData(route, {text: text});
  }

  export { postGet };
  export { postData }