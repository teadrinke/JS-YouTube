const accountId = 12345
let accountEmail = "shanks@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 //not allowed
accountEmail = "hc@sr.com"
accountPassword = "34567"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
