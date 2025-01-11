function sendMail() {
    var parmas = {
        user_email : document.getElementById('user_email').value,
        user_name : document.getElementById('user_name').value,
        user_message : document.getElementById('user_message').value }

    emailjs.send('service_mr38kfq', 'template_f8idlnk', parmas).then(function(res) {
        alert(" Your message was sent successfully. ✅ " + res.status) },

        function(error) {
            alert("Message was not sent successfully (service error)❌", error) } ) }
