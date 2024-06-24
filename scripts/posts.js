/* Posts Page JavaScript */

"use strict";

window.onload = (e) => {
    getpost()
};

// getting the data from the api
function getLoginData () {
    const loginJSON = window.localStorage.getItem("login-data");
    return JSON.parse(loginJSON) || {};
}

// getting the "Posts" from the API
function getpost(){
    const loginData = getLoginData();
const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", `Bearer ${loginData.token}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts?limit=100&offset=0", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}







// function showPost(_data){
//     _data.forEach(Post => {
//         PostList.innerHTML += 
//         `
         
//         <div> ${Post.text}<div>
//         <div> ${Post.username}<div>
       
//         `
        
//     });
//   }