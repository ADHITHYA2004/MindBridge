// regex

function testname(name){
    const namepattern=/^[a-zA-Z\s']{2,}$/
    let namematch=namepattern.test(name);
    if(namematch){
        document.getElementById('nameerror').style.display='none';
        return namematch;
    }
    else{
        document.getElementById('nameerror').style.display='block';
    }
}

function testemail(mail){
    const emailpattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let emailmatch=emailpattern.test(mail);
    if(emailmatch){
        document.getElementById('emailerror').style.display='none';
        return emailmatch;
    }
    else{
        document.getElementById('emailerror').style.display='block';
    }
}


const UserDetails=[];
document.getElementById('submit-but').addEventListener('click', (e)=>{
    e.preventDefault();
    const userName = document.getElementById('input-name').value
    const userEmail = document.getElementById('input-mail').value

    testname(userName);
    testemail(userEmail);
    let inputname=testname(userName)
    let inputemail=testemail(userEmail)

    if(inputname==true && inputemail==true){
        console.log(userName);
        console.log(userEmail);
        window.location.href='quiz.html'
    }

})



