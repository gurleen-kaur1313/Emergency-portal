var firebaseConfig = {
    apiKey: "AIzaSyBzqYG2Gg8YrUPLK3bROEXVJyY8x6cUzE4",
    authDomain: "raise-jobs.firebaseapp.com",
    databaseURL: "https://raise-jobs.firebaseio.com",
    projectId: "raise-jobs",
    storageBucket: "raise-jobs.appspot.com",
    messagingSenderId: "954073927401",
    appId: "1:954073927401:web:9fc220c30b232a41c32a78",
    measurementId: "G-XHTJKB62JY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var title = document.getElementById("title");
  var des = document.getElementById("des");
  var skill = document.getElementById("skills");
  var mob = document.getElementById("phone");
  var pay = document.getElementById("pay");
  var loc = document.getElementById("location");
const proxyurl = "https://cors-anywhere.herokuapp.com/";

function timepass(){
    console.log("Harman noob");
    fetch(proxyurl + 'https://raise-backend.herokuapp.com/graphql', {
        method:'POST',
        headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
        mutation: `
        mutation{
            addJob(description:${des.value},title:${title.value},location:${loc.value},pay:${pay.value},mobile:${mob.value},skillsrequired:${skill.value}){
              __typename
            }
          }`
    })
    })
}