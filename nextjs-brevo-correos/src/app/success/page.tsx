import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-green-500 mb-4">Formulario enviado con éxito</h1>
        <p className="text-gray-600 mb-8">Gracias por completar el formulario.</p>
        <Link href="/">
          <a className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition">
            Volver a la página principal
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
