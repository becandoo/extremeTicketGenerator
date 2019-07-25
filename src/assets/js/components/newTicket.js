var greeting = "Thank you for calling Papa Murphy's Technical support, this is Brandon speaking, may I start with your state and store number, please?"

var ticket = {
    name: "",
    state: "",
    site_id: "",
    role: "",
    telephone: "",
    phone_type: "",
    email_address: "",
    issue: "",
    troubleshooting_steps_completed: "",
    comments: "",
    store_number : function(){
        return this.state + this.site_id;
    }
};
