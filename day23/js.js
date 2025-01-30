

function login(event){
    event.preventDefault();
    let mail= document.getElementById('exampleInputEmail1').value
    let pass= document.getElementById('exampleInputPassword1').value
    mail_error(mail,pass)
    if(check==true && pass=='adhi'){
        window.location.href='product.html'
    }
}
let check=false;
let pass=false;
function mail_error(mail){
    const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    console.log(mail)
    let emailmatch = emailpattern.test(mail);
    if (emailmatch) {
        document.getElementById('emailerror').classList.add('hide')
        check=true
    }
    else {
        document.getElementById('emailerror').classList.remove('hide')
    }
    if(pass=='adhi'){
        document.getElementById('passerror').classList.add('hide')
        pass=true;
    }
    else {
        document.getElementById('passerror').classList.remove('hide')
    }
}
