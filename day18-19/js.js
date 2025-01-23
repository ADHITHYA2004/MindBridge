document.getElementById("submit").addEventListener("click", function (e) {
    e.preventDefault();

    let personname = document.getElementById("person_name").value;
    let age = document.getElementById("age").value;
    let phone_number = document.getElementById("phone").value;
    let gender = document.getElementsByName("gender");
    let subject = document.getElementsByName("subject");
    let dob = document.getElementById("dob").value;
    let location = document.getElementById("location").value;
    var gender1 = "";
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            gender1 = gender[i].value;
        }
    }
    let subjects = "";
    for (i = 0; i < subject.length; i++) {
        if (subject[i].checked) {
            subjects += subject[i].value + ", ";
        }
    }
    console.log(personname);
    console.log(age);
    console.log(phone_number);
    console.log(gender1);
    console.log(subjects);
    console.log(dob);
    console.log(location);

    const table_data = document.getElementById("table-body");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
            <td>${personname}</td>
            <td>${age}</td>
            <td>${phone_number}</td>
            <td>${gender1}</td>
            <td>${subjects}</td>
            <td>${dob}</td>
            <td>${location}</td>
            <td><i id='delete_row' onclick='delete_row(event)' class="fa-solid fa-trash"></i> 
            <i id='edit_row' onclick='edit_row(event)' class="fa-solid fa-pen-to-square"></i></td> 
        `;

    // regex
    const namepattern = /^[a-zA-Z\s']{2,}$/;
    const agepattern = /^[0-9]?[0-9]$/;
    const phonepattern = /^[6-9]{1}[0-9]{9}$/;
    const dobpattern = /^[0-9]{2}[/]{1}[0-9]{1}[0-9]{1}[/][1-2]{1}[0-9]{3}$/;

    const namematch = namepattern.test(personname);
    const agematch = agepattern.test(age);
    const phonematch = phonepattern.test(phone_number);
    const dobmatch = dobpattern.test(dob);
    const locationmatch = location;

    var subjectmatch = 0;
    var gendermatch = 0;

    // error handling
    if (namematch == false) {
        document.getElementById("error_name").style.display = "block";
    } else {
        document.getElementById("error_name").style.display = "none";
    }
    if (agematch == false) {
        document.getElementById("error_age").style.display = "block";
    } else {
        document.getElementById("error_age").style.display = "none";
    }
    if (phonematch == false) {
        document.getElementById("error_number").style.display = "block";
    } else {
        document.getElementById("error_number").style.display = "none";
    }
    if (gender1 == "") {
        document.getElementById("error_gender").style.display = "block";
    } else {
        document.getElementById("error_gender").style.display = "none";
        gendermatch = 1;
    }
    if (subjects == "") {
        document.getElementById("error_subject").style.display = "block";
    } else {
        document.getElementById("error_subject").style.display = "none";
        subjectmatch = 1;
    }
    if (dobmatch == false) {
        document.getElementById("error_dob").style.display = "block";
    } else {
        document.getElementById("error_dob").style.display = "none";
    }
    if (locationmatch == "none") {
        document.getElementById("error_location").style.display = "block";
    } else {
        document.getElementById("error_location").style.display = "none";
    }

    // add row
    if (
        agematch == true &&
        namematch == true &&
        phonematch == true &&
        dobmatch == true &&
        gendermatch == 1 &&
        subjectmatch == 1 &&
        locationmatch != "none"
    ) {
        table_data.appendChild(newRow);
        document.getElementById("person_name").value = "";
        document.getElementById("age").value = "";
        document.getElementById("phone").value = "";
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                gender[i].checked = false;
            }
        }
        let subjects = "";
        for (i = 0; i < subject.length; i++) {
            if (subject[i].checked) {
                subject[i].checked = false;
            }
        }
        document.getElementById("dob").value = "";
    }
});

// delete
function delete_row(event) {
    const row = event.target.closest("tr");
    row.remove();
}

// edit
function edit_row(event) {
    event.preventDefault();
    const row = event.target.closest("tr");

    let name = row.children[0].textContent;
    let age = row.children[1].textContent;
    let phone_no = row.children[2].textContent;
    let gender = row.children[3].textContent;
    let subject = row.children[4].textContent;
    let dob = row.children[5].textContent;
    let location = row.children[6].textContent;
    document.getElementById("person_name").value = name;
    document.getElementById("age").value = age;
    document.getElementById("phone").value = phone_no;
    // age and subject need to add
    document.getElementById("dob").value = dob;
    document.getElementById("location").value = location;

    const submit_btn = document.getElementById("submit");
    const update_btn = document.getElementById("update");
    const clear_btn = document.getElementById("clear");

    submit_btn.style.display = "none";
    update_btn.style.display = "block";
    clear_btn.style.display = "none";

    // update
    document.getElementById("update").addEventListener("click", function (et) {
        et.preventDefault();
        var personname = document.getElementById("person_name").value;
        var age = document.getElementById("age").value;
        var phone_number = document.getElementById("phone").value;
        var gender = document.getElementsByName("gender");
        var subject = document.getElementsByName("subject");
        var dob = document.getElementById("dob").value;
        var location = document.getElementById("location").value;
        var gender1 = "";
        for (i = 0; i < gender.length; i++) {
            if (gender[i].checked) {
                gender1 = gender[i].value;
            }
        }
        let subjects = "";
        for (i = 0; i < subject.length; i++) {
            if (subject[i].checked) {
                subjects += subject[i].value + ", ";
            }
        }
        // regex
        const namepattern = /^[a-zA-Z\s']{2,}$/;
        const agepattern = /^[0-9]?[0-9]$/;
        const phonepattern = /^[6-9]{1}[0-9]{9}$/;
        const dobpattern = /^[0-9]{2}[/]{1}[0-9]{1}[0-9]{1}[/][1-2]{1}[0-9]{3}$/;

        const namematch = namepattern.test(personname);
        const agematch = agepattern.test(age);
        const phonematch = phonepattern.test(phone_number);
        const dobmatch = dobpattern.test(dob);

        var subjectmatch = 0;
        var gendermatch = 0;

        // error handling
        if (namematch == false) {
            document.getElementById("error_name").style.display = "block";
        } else {
            document.getElementById("error_name").style.display = "none";
        }
        if (agematch == false) {
            document.getElementById("error_age").style.display = "block";
        } else {
            document.getElementById("error_age").style.display = "none";
        }
        if (phonematch == false) {
            document.getElementById("error_number").style.display = "block";
        } else {
            document.getElementById("error_number").style.display = "none";
        }
        if (gender1 == "") {
            document.getElementById("error_gender").style.display = "block";
        } else {
            document.getElementById("error_gender").style.display = "none";
            gendermatch = 1;
        }
        if (subjects == "") {
            document.getElementById("error_subject").style.display = "block";
        } else {
            document.getElementById("error_subject").style.display = "none";
            subjectmatch = 1;
        }
        if (dobmatch == false) {
            document.getElementById("error_dob").style.display = "block";
        } else {
            document.getElementById("error_dob").style.display = "none";
        }

        if (
            agematch == true &&
            namematch == true &&
            phonematch == true &&
            dobmatch == true &&
            gendermatch == 1 &&
            subjectmatch == 1
        ) {
            row.children[0].textContent =
                document.getElementById("person_name").value;
            row.children[1].textContent = document.getElementById("age").value;
            row.children[2].textContent = document.getElementById("phone").value;
            row.children[3].textContent = gender1;
            row.children[4].textContent = subjects;
            row.children[5].textContent = document.getElementById("dob").value;
            row.children[6].textContent = document.getElementById("location").value;

            document.getElementById("person_name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("dob").value = "";

            submit_btn.style.display = "block";
            update_btn.style.display = "none";
            // clear_btn.style.display='block'
        }
    });
}
