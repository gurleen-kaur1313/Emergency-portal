// var firebaseConfig = {
//   apiKey: "AIzaSyCYfY8l1jDnthlARwfzs5S_NLAKgKRgvuA",
//   authDomain: "raise-emergencies.firebaseapp.com",
//   databaseURL: "https://raise-emergencies.firebaseio.com",
//   projectId: "raise-emergencies",
//   storageBucket: "raise-emergencies.appspot.com",
//   messagingSenderId: "564078089879",
//   appId: "1:564078089879:web:266a0e4633408fced7bbd2"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
 var i=1;
 //,j=0,k=0;
// var address = [];
var lat=0,lng=0;
const proxyurl = "https://cors-anywhere.herokuapp.com/";
 fetch(proxyurl + 'https://oneness-backend.herokuapp.com/graphql/',  {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        query: `
        
        query{
          myemergency{
            time
            latitude
            longitude
            date
          }
        }
        
        `
    })
}).then(res => res.json())
.then( data =>  {
  console.log(data.data.myemergency)
  
     data.data.myemergency.forEach(async myemergency => {
      lat=myemergency.latitude
      lng=myemergency.longitude
      console.log(lat)
     // var mob = myemergency.user.profile.mobile;
      //var pro = myemergency.user.profile.name;
      var time = myemergency.time;
      //console.log(k)
      //k++;
      
      //var data1 = "";
      // await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=efe8f8cf9ec6408f8064758d8fb335d9`)
      // .then(res => res.json())
      // .then(data =>{
      //   //console.log(data.results[0].formatted)
      //   // address.push(data.results[0].formatted)
      //   data1=data.results[0].formatted;
      // })
      //console.log(data1,lat)
      document.getElementById("tableContent").innerHTML += `<tr><th scope='row'>${i}</th><td>${myemergency.latitude}</td><td>${myemergency.longitude}</td><td>${time}</td></tr>`
      
      i++;
      // j++;
    })
    //console.log(address);
})


