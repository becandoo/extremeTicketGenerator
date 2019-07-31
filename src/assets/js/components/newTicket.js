var greeting = "Thank you for calling Papa Murphy's Technical support, this is Brandon speaking, may I start with your state and store number, please?"

var ticket = {
    fname: "",
    lname: "",
    state: "",
    site_id: "",
    role: "",
    telephone: "",
    email_address: "",
    issue: "",
    troubleshooting_steps_completed: "",
    comments: "",
    store_number : function(){
        return this.state + this.site_id;
    },
    name : function(){
        return this.fname + " " + this.lname;
    }
};

//load greeting
function loadGreeting(grt) {
     let greetingContainer = document.getElementById('greeting');
     //console.log(greetingContainer);
     let greetingMessage = grt;
     greetingContainer.innerText = grt;

};

loadGreeting(greeting);

function generateOutput(){
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    //console.log(fname);
    //console.log(lname);
    let state = document.getElementById('state').options[document.getElementById('state').selectedIndex].value;
    //console.log(state);
    let site_id = document.getElementById('site_id').value;
    //console.log(site_id);
    let role = document.getElementById('role').options[document.getElementById('role').selectedIndex].value;
    //console.log(role);
    let telephone = document.getElementById('telephone').value;
    //console.log(telephone);
    let email = document.getElementById('email').value;
    //console.log(email);
    let issue = document.getElementById('issue').value;
    //console.log(issue);
    let troubleshooting = document.getElementById('troubleshooting').value;
    //console.log(troubleshooting);
    let comments = document.getElementById('comment').value;
    //console.log(comments);

};

document.getElementById('generateOutput').onclick =  function(){
    generateOutput();
};
