// dropdown page
const page_show = document.getElementById("dropdown-content");
function show(){
    if(page_show.style.display == 'block'){
        page_show.style.display = 'none';
    }
    else{
        page_show.style.display = 'block';
    }
};

// open membership login
const body1=document.getElementsByTagName("body")
const member_login_show =document.getElementById("membership-login");
function show_memberlogin(){
    member_login_show.style.display='block';
    body1[0].style.backgroundColor='#333d3366';
};

// to close membership login
function close_membership_login(){

    member_login_show.style.display='none';
}
