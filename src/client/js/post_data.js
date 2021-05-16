// postData makes a POST request to the server with the text inputs
/*
function postData() {
    console.log('::: postData running :::');

}
*/
// postData --> nur async Funktion
// wird über postget POST request wird dann über postGet ausgeführt


console.log('::: postData running :::');

const postData = async ( url = '', data = {})=>{
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
      if (newData.cod == 404) {
        throw {
          name: 'Input Error',
          message: 'Sorry, an error occured...',
          code: newData.cod
        }
      }
  
      if (newData.cod != 200) {
        throw {
          name: 'Application Error',
          message: 'Sorry, something went wrong...!',
          code: newData.cod
        }
      }
      // return the received date for the combined function
      return newData;
    }
    
    // Error handling
    catch(error) {
    
      alert(error);
    }
  };
  
  

  export { postData }