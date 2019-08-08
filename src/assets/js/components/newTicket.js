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
        return this.state.toUpperCase() + this.site_id;
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

function buildTicketObj(){
    let fname = document.getElementById('fname').value;
    ticket.fname = fname;
    let lname = document.getElementById('lname').value;
    ticket.lname = lname;
    
    let state = document.getElementById('state').options[document.getElementById('state').selectedIndex].value;
    ticket.state = state;
    let site_id = document.getElementById('site_id').value;
    ticket.site_id = site_id;
    let role = document.getElementById('role').options[document.getElementById('role').selectedIndex].value;
    ticket.role = role;
    let telephone = document.getElementById('telephone').value;
    ticket.telephone = telephone;
    let email = document.getElementById('email').value;
    ticket.email_address = email;
    let issue = document.getElementById('issue').value;
    ticket.issue = issue;
    let troubleshooting = document.getElementById('troubleshooting').value;
    ticket.troubleshooting_steps_completed = troubleshooting;
    let comments = document.getElementById('comment').value;
    ticket.comments = comments;

    let outputString = 'Name: ' + ticket.name() + '\n' + 
                       'Store Number: ' + ticket.store_number() + '\n' +
                       'Telephone: ' + ticket.telephone + '\n' +
                       'Role: ' + ticket.role + '\n' +
                       'Email: ' + ticket.email_address + '\n' +
                       'Issue: ' + ticket.issue;

    generateOutput(outputString);
}
function generateOutput(str){
    let outputBox = document.getElementById('output');
    outputBox.value = str;
};

document.getElementById('generateOutput').onclick =  function(){
    buildTicketObj();
};


function loadTestData() {
    document.getElementById('fname').value = 'Johnny';
    document.getElementById('lname').value = 'Smithy';
    document.getElementById('site_id').value = '019';
    document.getElementById('telephone').value = '555-555-5555';
    document.getElementById('email').value = 'test@gmail.com';
    document.getElementById('issue').value = 'FCR Bin Sync Error';
};

loadTestData();