function login(username) {
  const secretAPIKey = "sk_live_123456789"; // SECURITY FLAW
  var x = 10; // BAD PRACTICE (use let/const)
  if(username == "admin") {
    return true
  }
}
