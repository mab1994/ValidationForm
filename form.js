

function CheckEmail(Mail) 
{
 var formatMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 return formatMail.test(Mail);
}

function CheckPassword(Password) {
    var FormatPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){9,}/
    return FormatPassword.test(Password);
}

document.getElementById("sendbtn").addEventListener('click', fields)
function fields () {
  var inputs = document.getElementsByClassName('text-input')
  var Mail = document.getElementById('mail').value
  var Pass = document.getElementById('password').value
  for (let i =0; i<inputs.length;i++) {
      if (!inputs[i].value) {
          return alert('All fields are required!')
      }
      
  }
if (!CheckEmail(Mail)) {
    alert('Invalid Mail Adress!') }
else if (!CheckPassword(Pass))
   { alert('Invalid Password!') }
else { alert('Thank You!') }
}

document.getElementById("resetbtn").addEventListener('click', fieldsReset)
function fieldsReset () {
    var inputs = document.getElementsByClassName('text-input')
    for (let i =0; i<inputs.length;i++) {
             inputs[i].value = ''
    } 
}