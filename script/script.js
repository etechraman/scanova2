function check() {
  console.log("test");
}
function checkform() {
  var emailBox = document.getElementById("emailBox");
  var passwordBox = document.getElementById("passwordBox");

  var createAccount = false;
  if (emailBox.value.length && passwordBox.value.length > 8) {
    createAccount = true;
  }
  if (createAccount) {
    document.getElementById("create").disabled = false;
  }
  if (!createAccount) {
    document.getElementById("create").disabled = true;
  }
  if (passwordBox.value.length > 8 && passwordBox.value.length < 10) {
    document.getElementById("weakPass").style.display = "flex";
  }
  if (passwordBox.value.length >= 10) {
    document.getElementById("weakPass").style.display = "none";
    document.getElementById("strongPass").style.display = "flex";
  }
  if (passwordBox.value.length < 10) {
    document.getElementById("strongPass").style.display = "none";
  }
  if (passwordBox.value.length < 8) {
    document.getElementById("weakPass").style.display = "none";
  }
}
