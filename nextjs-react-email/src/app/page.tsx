'use client';
import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <button
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        onClick={async () => {
          try {
            const res = await fetch('./api/route', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (!res.ok) {
              throw new Error('Error al enviar el correo');
            }

            const data = await res.json();
            console.log(data);
          } catch (error) {
            console.error('Error al enviar el correo:', error);
          }
        }}
      >
        Send email
      </button>
    </div>
  );
}

export default HomePage;
