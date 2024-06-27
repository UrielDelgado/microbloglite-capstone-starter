"use strict"


function getLoginData () {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}

function createPost(){
    const loginData = getLoginData();
    const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", `Bearer ${loginData.token}`);
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "text": `${document.getElementById('createPost').value}`
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts", requestOptions)
  .then((response) => response.text())
  .then((result) => {console.log(result);
    document.getElementById('createPost').value ="";
  })

  .catch((error) => console.error(error));
}



