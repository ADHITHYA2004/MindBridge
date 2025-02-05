

function login(event) {
    event.preventDefault();
    let mail = document.getElementById('exampleInputEmail1').value
    let pass = document.getElementById('exampleInputPassword1').value
    // mail_error(mail,pass)
    let check = false;
    let pass1 = false;
    const emailpattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    console.log(mail)
    let emailmatch = emailpattern.test(mail);
    if (emailmatch) {
        document.getElementById('emailerror').classList.add('hide')
        check = true
    }
    else {
        document.getElementById('emailerror').classList.remove('hide')
    }
    if (pass == 'adhi') {
        document.getElementById('passerror').classList.add('hide')
        pass1 = true;
    }
    else {
        document.getElementById('passerror').classList.remove('hide')
    }
    if (check == true && pass1 == true) {
        window.location.href = 'product.html'
    }
}

// function mail_error(mail,pass){

// }
