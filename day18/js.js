
document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();

    let personname=document.getElementById('person_name').value;
    let age=document.getElementById('age').value;
    let phone_number=document.getElementById('phone').value;
    let gender=document.getElementsByName('gender');
    let subject=document.getElementsByName('subject');
    let dob=document.getElementById('dob').value;
    let location=document.getElementById('location').value;
    var gender1='';
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked){
            gender1=gender[i].value;
        }
    }
    let subjects='';
    for (i = 0; i < subject.length; i++) {
        if (subject[i].checked){
            subjects+=subject[i].value + ", ";
        }
    }
    console.log(personname); 
    console.log(age);
    console.log(phone_number); 
    console.log(gender1); 
    console.log(subjects); 
    console.log(dob); 
    console.log(location);

    
    // add in table
    const table_data=document.getElementById('table-body');
    const newRow=document.createElement('tr');
    
    newRow.innerHTML=`
        <td>${personname}</td>
        <td>${age}</td>
        <td>${phone_number}</td>
        <td>${gender1}</td>
        <td>${subjects}</td>
        <td>${dob}</td>
        <td>${location}</td>
        <td><button id='delete_row' onclick='delete_row(event)'>Delete</button>
        <button id='edit_row' onclick='edit_row(event)'>Edit</button></td> `;
        



    const namepattern=/[a-zA-Z]/;
    const agepattern=/^[0-9][0-9]$/;

    const agematch = agepattern.test(age);
    console.log(agematch);
    if(agematch==false){
        document.getElementById('error_age').style.display='block'
        alert('enter the name correctly');
    }

    if(agematch==true){
        table_data.appendChild(newRow);
    }
})

function delete_row(event){
    const row = event.target.closest('tr');
        row.remove();
    }

    function edit_row(event) {
        // Find the closest table row
        event.preventDefault();
        const row = event.target.closest('tr');
        
        const name = row.children[0].textContent;
        const age = row.children[1].textContent;
        const phone_no = row.children[2].textContent;
        const gender = row.children[3].textContent;
        const subject = row.children[4].textContent;
        const dob = row.children[5].textContent;
        const location = row.children[6].textContent;
        document.getElementById('person_name').value = name;
        document.getElementById('age').value = age;
        document.getElementById('phone').value = phone_no;
        document.getElementById('subject').value = subject;
        document.getElementById('dob').value = dob;
        document.getElementById('location').value = location;
        
        const submit_btn=document.getElementById('submit');
        const update_btn=document.getElementById('update')
        // submit_btn.style.display='none';
        update_btn.style.display='block';

        // function update(e){
        //     event.preventDefault();
        //     let personname=document.getElementById('person_name').value;
        //     let age=document.getElementById('age').value;
        //     let phone_number=document.getElementById('phone').value;
        //     let gender=document.getElementsByName('gender');
        //     let subject=document.getElementsByName('subject');
        //     let dob=document.getElementById('dob').value;
        //     let location=document.getElementById('location').value;
        //     var gender1='';
        //     for (i = 0; i < gender.length; i++) {
        //         if (gender[i].checked){
        //             gender1=gender[i].value;
        //         }
        //     }
        //     let subjects='';
        //     for (i = 0; i < subject.length; i++) {
        //         if (subject[i].checked){
        //             subjects+=subject[i].value + ", ";
        //         }
        //     }
        //     row.children[0].textContent=document.getElementById('person_name').value
        //     row.children[1].textContent=document.getElementById('age').value;
        //     row.children[2].textContent=document.getElementsByName('gender');
        //     row.children[3].textContent=document.getElementById('phone').value;
        //     row.children[4].textContent=document.getElementById('subject').value;
        //     row.children[5].textContent=document.getElementById('dob').value;
        //     row.children[6].textContent=document.getElementById('location').value;

        // }
        document.getElementById('update').addEventListener('click', function(et){
            et.preventDefault();
            let personname=document.getElementById('person_name').value;
            let age=document.getElementById('age').value;
            let phone_number=document.getElementById('phone').value;
            let gender=document.getElementsByName('gender');
            let subject=document.getElementsByName('subject');
            let dob=document.getElementById('dob').value;
            let location=document.getElementById('location').value;
            var gender1='';
            for (i = 0; i < gender.length; i++) {
                if (gender[i].checked){
                    gender1=gender[i].value;
                }
            }
            console.log("update"+ gender1)
            let subjects='';
            for (i = 0; i < subject.length; i++) {
                if (subject[i].checked){
                    subjects+=subject[i].value + ", ";
                }
            }
            row.children[0].textContent=document.getElementById('person_name').value
            row.children[1].textContent=document.getElementById('age').value;
            row.children[2].textContent=document.getElementById('phone').value;
            row.children[3].textContent=gender1;
            row.children[4].textContent=subjects;
            row.children[5].textContent=document.getElementById('dob').value;
            row.children[6].textContent=document.getElementById('location').value;
        })
    }