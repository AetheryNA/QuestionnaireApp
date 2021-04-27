import $ from 'jquery';

// Login event listener
$('#login-submit').click((event) => {
  const expectedUsername = "Admin"
  const expectedPassword = "12345"

  const receivedUsername = $('#login-username').val();
  const receivedPassword = $('#login-password').val();

  // Validation check
  if (receivedUsername == expectedUsername && receivedPassword == expectedPassword) 
    console.log("login")
  else {
    alert("Wrong password or username entered")
    return false
  }
})
