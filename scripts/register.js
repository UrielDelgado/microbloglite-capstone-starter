
function SignUP(UserData){


const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "username": `${UserData.username}`,
  "fullName": `${UserData.fullname}`,
  "password": `${UserData.password}`
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://microbloglite.us-east-2.elasticbeanstalk.com/api/users", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    console.log(result);
    login(UserData);
  }
  
    
  
  )
  .catch((error) => console.error(error));
}

  function CallSignUp(){
const registrationForm = document.querySelector("#registration");

registrationForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    // as it will do by default when the Submit event is triggered:
    event.preventDefault();

    // We can use registrationForm.username (for example) to access
    // the input element in the form which has the ID of "username".
    const userData = {
        username: registrationForm.username.value,
        fullname: registrationForm.Fullname.value,
        password: registrationForm.password.value,
    }
    console.log(userData)
    // Time to actually process the login using the function from auth.js!
    SignUP(userData);
}};