import React, { useState } from 'react';

const PopUp = ({ show, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const namePattern = /^[a-zA-Z\s]{1,50}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!namePattern.test(name)) {
      setError('Nombre inválido. Solo se permiten letras y espacios.');
      return;
    }

    if (!emailPattern.test(email)) {
      setError('Correo electrónico inválido.');
      return;
    }

    setError('');
    console.log('Formulario enviado:', { name, email });
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div 
        className="relative bg-opacity-10 bg-black border-2 border-white rounded-lg backdrop-blur-md p-6 sm:p-8 md:p-10" 
        style={{
          width: '70%',
          maxWidth: '450px',
          maxHeight: '600px',

        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-xl font-bold focus:outline-none"
        >
          &times;
        </button>

        <h1 className="text-center text-2xl font-medium mb-8">Reclama tu Oferta</h1>

        <form className="space-y-7 mb-6" onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="peer w-full py-3 bg-transparent text-white placeholder-transparent focus:outline-none border-b-2 border-white"
              id="name"
              placeholder="Nombre Completo"
              maxLength="50"
            />
            <label
              htmlFor="name"
              className={`absolute left-0 text-white transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] ${
                name ? '-translate-y-6 scale-75' : 'top-3'
              } peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75`}
            >
              Nombre Completo
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="peer w-full py-3 bg-transparent text-white placeholder-transparent focus:outline-none border-b-2 border-white"
              id="email"
              placeholder="Correo Electrónico"
            />
            <label
              htmlFor="email"
              className={`absolute left-0 text-white transition-all duration-300 transform -translate-y-6 scale-75 origin-[0] ${
                email ? '-translate-y-6 scale-75' : 'top-3'
              } peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75`}
            >
              Correo Electrónico
            </label>
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Botón con hover y active */}
          <button
            type="submit"
            className="w-full py-3 rounded-md text-black font-medium mb-6 transition-all duration-300"
            style={{
              background: "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
            }}
            // Hover y active para cambiar gradiente
            onMouseOver={(e) =>
              (e.target.style.background = "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)")
            }
            onMouseDown={(e) =>
              (e.target.style.background = "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)")
            }
            onMouseUp={(e) =>
              (e.target.style.background = "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)")
            }
          >
            Reclama Aquí
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
