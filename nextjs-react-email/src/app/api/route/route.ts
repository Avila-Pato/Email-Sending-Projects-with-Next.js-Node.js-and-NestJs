import { EmailTemplate } from '../../components/email-template'; // Ajusta según la ubicación de tu EmailTemplate
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Correo automatizado
      to: ['p.avilaf1998@gmail.com'],
      subject: 'Hello from NextJs',
      react: EmailTemplate({ firstName: 'Pato' }),
      text: ""
    });

    console.log(data);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    if (error instanceof Error) {
      return Response.json({ error: error.message }, { status: 500 });
    } else {
      return Response.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}