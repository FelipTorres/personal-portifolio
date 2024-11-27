$(document).ready(function() {

    $('#contact-form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: "Por favor, insira seu nome",
                minlength: "Seu nome deve ter pelo menos 2 caracteres"
            },
            email: {
                required: "Por favor, insira seu e-mail",
                email: "Por favor, insira um e-mail válido"
            },
            message: {
                required: "Por favor, insira sua mensagem",
                minlength: "Sua mensagem deve ter pelo menos 5 caracteres"
            }
        },
        errorClass: "text-danger",
        submitHandler: function() {

            const name = $('#name');
            const nameValue = name.val();

            const email = $('#email');
            const emailValue = email.val();

            const message = $('#message');
            const messageValue = message.val();

            const data = { name: nameValue, email: emailValue, message: messageValue };

            localStorage.setItem('formData', JSON.stringify(data));

            const storedData = JSON.parse(localStorage.getItem('formData'));

            $('#show-data').html(`
                <div class="alert alert-success" role="alert">
                    Mensagem enviada com sucesso!
                </div>  
                <p><strong>Nome:</strong> ${storedData.name}</p>
                <p><strong>E-mail:</strong> ${storedData.email}</p>
                <p><strong>Mensagem:</strong> ${storedData.message}</p>
                `);

            name.val('');
            email.val('');
            message.val('');
        }
    });
});
