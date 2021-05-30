var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const request = require('request');
const app = express();
const base_url = 'https://api.meaningcloud.com/sentiment-2.1/';

app.use(express.urlencoded({
  extended: true,
  parameterLimit: 10000,
  limit: '1mb'
  }));
app.use(express.json());

// AXOIS Test
const axios = require('axios')


// Hiding the API Key via DOTENV
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your API key is ${process.env.API_KEY}`);

app.use(express.static('dist'))

console.log(__dirname)



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


// GET Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// POST routes
app.post('/sentiment_analysis', (req,res) => {
    console.log("::: Sentiment Analsysis running :::");
    console.log("request Body:",req.body);    
    lang = 'en';
    model = 'general';
    text = req.body.text;
    const url = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=${lang}&model=${model}&txt=${text}`;
    request({url: url, json: true}, (error, {body}) => {
        console.log("response body:", body);
        res.send(body);
    }) 
});

app.post('/deep_cat', (req, res) => {
  console.log("::: Deep Categorization running :::");
  /*
  lang = 'en';
  model = 'general';
  text = req.body.text;
  endpoint = 'https://api.meaningcloud.com/deepcategorization-1.0';
  const url = `${endpoint}?key=${process.env.API_KEY}&lang=${lang}&model=${model}&txt=${text}`;
  console.log(url);
  request({url: url, json: true}, (error, {body}) => {
      //console.log(body);
      res.send(body);
  }) 
  */
  const formdata = {key: "c65289af61498cf287dd781552a5858e", txt: req.body.text, model: "IAB_2.0_en"};
  text = req.body.text;
//  const url = 'https://api.meaningcloud.com/deepcategorization-1.0?key=c65289af61498cf287dd781552a5858e&model=IAB_2.0_en&txt=Zara is great, lots of stylish and affordable clothes, shoes, and accessories.';

  const url = `https://api.meaningcloud.com/deepcategorization-1.0?key=c65289af61498cf287dd781552a5858e&model=IAB_2.0_en&txt=${text}`;
  request({url: url, json: true}, (error, {body}) => {
    console.log("response boy:", body);
    res.send(body);
    }) 

})

app.post('/default', function (req, res) {
    console.log("::: Default running :::");
    let body = { status: { code: '666'}};
    res.send(body);
})

