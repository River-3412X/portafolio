(function(){
    emailjs.init("user_7MMRGZIxFkYauEW9BbQPJ");
 })();
const vue = new Vue({
    el: '#app',
    data(){
        return {
            name: '',
            email: '',
            message: '',
            cellphone: '',
        }
    },
    methods: {
        enviar(){
            let data = {
                name: this.name,
                email: this.email,
                message: this.message,
                cellphone: this.cellphone,
            };
            
            emailjs.send("service_rivercr","FormGitHubPort", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    this.name="";
                    this.email="";
                    this.message= '';
                    this.cellphone="";

                    var option = {
                        animation: true,
                        autohide:true,
                        delay:5000
                    };
                    $("#alert").toast(option);
                    $("#alert").toast("show");
                }
               console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                var option = {
                        animation: true,
                        autohide:true,
                        delay:5000
                    };
                $("#alert").toast(option);
                $("#alert-body").html("an error occurred while sending the message");
                $("#alert").toast("show");
               
            });
        }
        
    }
});