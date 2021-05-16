function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })

    
}
/*
function test(event) {
    event.preventDefault();

    const formdata = new FormData();
    formdata.append("key", "c65289af61498cf287dd781552a5858e");
    formdata.append("txt", "Seit Tagen gibt es im Nahost-Konflikt Angriffe, Gegenangriffe und Tote auf beiden Seiten: Israel bombardierte nun das Haus eines Hamas-Chefs, die Palästinenser nahmen erneut den Großraum Tel Aviv unter Beschuss.Die israelische Armee hat nach eigenen Angaben einen Luftangriff auf das Haus des Chefs des politischen Flügels der radikalislamischen Hamas im Gazastreifen, Jahia Sinwar, ausgeführt. Auf Twitter veröffentlichte die Armee ein Video, auf dem ein durch ein Bombardement schwer beschädigtes Haus zu sehen war, aus dem Rauchwolken aufstiegen. Ob Sinwar bei dem Anschlag getötet wurde, war zunächst unklar. ");
    formdata.append("lang", "de");  // 2-letter code, like en es fr ...

    const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
    };

    const response = fetch("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
    .then(response => ({
        status: response.status, 
        body: response.json()
    }))
    .then(({ status, body }) => console.log(status, body))
    .catch(error => console.log('error', error));

    console.log (response);
}
*/

export { handleSubmit };
//export { test };
