var spinner = `<div class="d-flex justify-content-center" id="spinner">
    <div class="spinner-border mr-2" role="status">
    </div>
        sending...
</div>`;
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
            $("#formulario").append(spinner);
            var boton= $("#btn_form");
            $("#btn_form").remove();
            $("#formulario").find("input[type=submit]").remove();
            

            let data = {
                name: this.name,
                email: this.email,
                message: this.message,
                cellphone: this.cellphone,
            };
            
            emailjs.send("service_rivercr","FormGitHubPort", data)
            .then(function(response) {
                if(response.text === 'OK'){
                    $("#name").val("");
                    $("#email").val("");
                    $("#cellphone").val("");
                    $("#message").val("");

                    var option = {
                        animation: true,
                        autohide:true,
                        delay:5000
                    };
                    $("#alert").toast(option);
                    $("#alert").toast("show");
                }
                $("#formulario").append(boton);
                $("#formulario").find("#spinner").remove();
            }, function(err) {
                var option = {
                        animation: true,
                        autohide:true,
                        delay:5000
                    };
                $("#alert").toast(option);
                $("#alert-body").html("an error occurred while sending the message");
                $("#alert").toast("show");
                $("#formulario").append(boton);
                $("#formulario").find("#spinner").remove();
            });
        }     
    }
});