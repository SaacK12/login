function enviar()
{   //Variables.
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    let captchaRespuesta = grecaptcha.getResponse();
    let usuario = {
            nombre: nombre,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            }
        console.log(captchaRespuesta);
if (!nombre || !email || !asunto || !mensaje|| captchaRespuesta === "") //Si el Captcha no devuelve ningun token.
{
    alert("complete los datos y el captcha");
}
else{ 
    console.log(usuario);
    emailjs.send("service_eajnwps","template_bfsmb7m",usuario)
      alert("Enviado!")
           
      fetch('https://script.google.com/macros/s/AKfycbzjhL66ryiWxYHkb-i3kQYaIIDHHRg0kmoYuJTXI9lJRpPFWwHfG-sVHGKSajIpy65cjg/exec', {
        method: 'POST',
        body: JSON.stringify(usuario), 
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.text())
    .then(result => {
        alert("Datos enviados correctamente");
        console.log(result);
    })
    .catch(error => {
        alert("Error al enviar los datos (Gracias Google)");
        console.error('Error:', error);
        window.location.href = 'https://youtu.be/MS8OawQegYE?si=64buJf31Ro_6FC-O';
    });
 }
 }