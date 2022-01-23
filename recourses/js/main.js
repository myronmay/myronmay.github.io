function menu_appear(){
	document.getElementById('menu').style.left = "0";
	document.getElementById('bg-cover').style.position = "absolute";
}
function menu_disappear(){
	document.getElementById('menu').style.left = "-75%";
	document.getElementById('bg-cover').style.position = "";	
}

// SERVICE ID => service_wnou52g
// USER ID => user_m2IEGOkBcFPjKt8BeJJhc
// TEMPLATE ID => template_mkc4x8c
(function(){
	emailjs.init("user_m2IEGOkBcFPjKt8BeJJhc");
})();
const vue = new Vue({
    el: '#contact_form',
    data(){
    	return {
        	from_name: '',
        	from_email: '',
        	message: '',
        	contact: '',
        	subject: '',
        	}
    	},
    methods: {
        enviar(){
           	let data = {
                from_name: this.from_name,
                message: this.message,
                contact: this.contact
            };
                        
            emailjs.send("service_wnou52g","template_mkc4x8c", data)
           	.then(function(response) {
            	if(response.text === 'OK'){
                	//alert('El correo se ha enviado de forma exitosa');
                	window.location.href="contact_with_me.html"
            	}
            	console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
            }, function(err) {
                	alert('Ocurrió un problema al enviar el correo');
                	console.log("FAILED. error=", err);
            });
        }
    }
});