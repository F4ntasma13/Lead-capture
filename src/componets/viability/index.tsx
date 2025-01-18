'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const FeasibilityForm: React.FC = () => {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const [formData, setFormData] = useState({
    cep: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
    local: "casa",
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica
    if (!formData.cep || !formData.cidade || !formData.bairro || !formData.rua || !formData.numero) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/installation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer SEU_TOKEN`, // Substitua pelo token correto
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Viabilidade enviada com sucesso! Agora é com a gente!");
        if (router) {
          router.push("#");
        }
        console.log(data);
      } else {
        alert(`Erro: ${data.message || "Problema ao enviar os dados."}`);
      }
    } catch (err) {
      console.error(err);
      alert("Erro na comunicação com a API.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Local de instalação</h2>

        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Local:</label>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="local"
                  value="casa"
                  checked={formData.local === "casa"}
                  onChange={handleChange}
                  className="text-blue-500"
                />
                <span>Minha casa</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="local"
                  value="apartamento"
                  checked={formData.local === "apartamento"}
                  onChange={handleChange}
                  className="text-blue-500"
                />
                <span>Meu apartamento</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="cep"
              placeholder="CEP"
              value={formData.cep}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="cidade"
              placeholder="Cidade"
              value={formData.cidade}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="bairro"
              placeholder="Bairro"
              value={formData.bairro}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="rua"
              placeholder="Rua"
              value={formData.rua}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="numero"
              placeholder="Digite o Número"
              value={formData.numero}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="text"
              name="complemento"
              placeholder="Digite o Complemento"
              value={formData.complemento}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-300"
              onClick={() => router?.back()}
            >
              Voltar
            </button>
            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded shadow-md hover:bg-orange-600"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeasibilityForm;