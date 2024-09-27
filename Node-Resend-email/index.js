import { Resend } from 'resend';

const resend = new Resend('YourApiKey'); // Tu clave API

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>', // dsesde el dominio quien lo envia
    to: ['p.avilaf1998@gmail.com'], // hacia quien llega pueden ser varios correos
    subject: 'Saludo desde el codigo resend ', // tema del correo
    html: '<strong>It works!</strong>', // contenido del correo en texto plano
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
