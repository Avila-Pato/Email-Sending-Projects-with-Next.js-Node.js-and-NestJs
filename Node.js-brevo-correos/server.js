import brevo from "@getbrevo/brevo";

// Crear una instancia de la API de correos transaccionales
const apiInstance = new brevo.TransactionalEmailsApi();

apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  "TuapiKey" // Tu clave API
);

const user = { name: "Pato Avila" }; // Definimos el objeto user

async function sendEmail() {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Hello from Brevo";
    sendSmtpEmail.to = [
      { email: "p.avilaf1998@gmail.com", name: user.name },
    ];
    sendSmtpEmail.htmlContent = `<html><body>
      <h1>Hola ${user.name}</h1>
      <p>This is a test email</p>
      <button>Click me</button>
      <a href="#">Go to my website</a>
    </body></html>`; // Etiqueta <a> corregida

    sendSmtpEmail.sender = {
      name: user.name,
      email: "p.avilaf1998@gmail.com",
    };

    // Enviar el correo
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Llamar a la función para enviar el correo
sendEmail();
