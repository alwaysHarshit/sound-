console.log("Hello World!");
fetch('http://localhost:3000/api/songs', {
    method: 'GET',
    mode: 'no-cors'
})
    .then(response => {
         // You won't get useful information here
    })
    .catch(error => console.error('Error:', error));

