"use server";

import { redirect } from "next/navigation";
import { sendEmail } from "./lib/brevo";

export async function handleForm(formdata: FormData) {
  const title = formdata.get("to");
  const to_name = formdata.get("to-name");
  const to_email = formdata.get("to_email");
  const content = formdata.get("content");

  // Validación de campos
  if (!title || !to_name || !to_email || !content) {
    console.log('Please fill in all fields');
    return redirect('/error'); // Redirigir a una página de error
  }

  // Validación de formato de correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(to_email as string)) {
    console.log('Please provide a valid email address');
    return redirect('/error'); // Redirigir a la página de error
  }

  // Intentar enviar el correo
  try {
    await sendEmail({
      subject: title as string,
      to: [{
        name: to_name as string,
        email: to_email as string,
      }],
      htmlContent: content as string,
    });

    // Redirigir a la página de éxito
    return redirect('/src/app/success'); // Asegúrate de que la ruta sea correcta
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
