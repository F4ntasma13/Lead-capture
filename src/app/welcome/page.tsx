"use client";

import React from "react";

const WelcomePage: React.FC = () => {
    const handleRedirect = () => {
        window.location.href = "https://conexaolinkes.com.br/";
      };    

  return (
    <div onClick={handleRedirect} className="relative min-h-screen bg-gradient-to-b from-blue-400 to-blue-900 flex flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="firework"></div>
        <div className="firework"></div>
        <div className="firework"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 animate-pulse">
          Bem-vindo à Conexão Link!
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Conectando você ao futuro com qualidade e velocidade.
        </p>
        <div className="firework"></div>
        <div className="flex items-center justify-center">
          <img
            src="/Arte Leads.png"
            alt="Sua foto aqui"
            className="w-72 h-72 sm:w-96 sm:h-96 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <button
          onClick={handleRedirect}
          className="px-16 py-3 bg-yellow-400 hover:bg-[#00ce01] text-lg font-semibold text-black rounded-lg shadow-md transition duration-300 ease-in-out hover:scale-110"
        >
          Volte ao site oficial
        </button>
        <div className="firework"></div>
      </div>
    </div>
    
  );
};

export default WelcomePage;