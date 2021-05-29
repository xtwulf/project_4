// postData --> nur async Funktion
// wird über postget POST request wird dann über postGet ausgeführt
/*
function postData() {
    console.log('::: postData running :::');

}
*/

const postData = async ( url = '', data = {})=>{
    console.log('::: postData running :::');
    console.log("URL:",url);
    console.log("Data:", data);
    let x = data;
    console.log("Test new variable ",x.text);
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
      console.log("NewData:",newData);
      return newData;
    }
    // Error handling
    catch(error) {
      alert("---Error:" + error);
    }
  };
  
// 

  // Aufruf von postData durch Submit Event hier

function postGet(){
    console.log('postGet');
    let text = document.getElementById('text').value;
    if (!text) {
        alert("Please fill in the field...!");
        return;
    }
    console.log("Text:",text);
     // Making the POST request on the /sentiment_analysis route
    //postData('/sentiment_analysis', {text:text});
    postData('/deep_cat', {text: text});
  }

  export { postGet };
  export { postData }