'use client';

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const FeasibilityForm: React.FC = () => {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const searchParams = useSearchParams();

  const initialData = searchParams.get("data")
    ? JSON.parse(decodeURIComponent(searchParams.get("data")!))
    : {};

  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };  

  const [formData, setFormData] = useState({
    nome: initialData.nome || "",
    email: initialData.email || "",
    fone_celular: initialData.fone_celular || "",
    plano: initialData.obs?.details || "",
    endereco: "",
    observacoes: "",
    data_cadastro: getCurrentDate(),//Obrigatório
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Dados enviados com sucesso! Bem-vindo a conexão Link!");
        if (router) {
          router?.push("/welcomePage");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Erro ao enviar dados. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com a API.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Preencha os dados</h2>
        <p className="text-sm text-gray-600 mb-6">
          Revise e complete as informações abaixo antes de enviar.
        </p>

        <div className="mb-4">
          <label htmlFor="nome" className="block text-gray-700 font-medium mb-2">
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2 "
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="fone_celular" className="block text-gray-700 font-medium mb-2">
            Telefone:
          </label>
          <input
            type="text"
            id="fone_celular"
            name="fone_celular"
            value={formData.fone_celular}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="plano" className="block text-gray-700 font-medium mb-2">
            Plano:
          </label>
          <input
            type="text"
            id="plano"
            name="plano"
            value={formData.plano}
            onChange={handleChange}
            className="w-full border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="endereco" className="block text-gray-700 font-medium mb-2">
            Endereço:
          </label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="observacoes" className="block text-gray-700 font-medium mb-2">
            Observações:
          </label>
          <textarea
            id="observacoes"
            name="observacoes"
            value={formData.observacoes}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 px-14 py-2 rounded shadow-md hover:bg-gray-300"
              onClick={() => router?.back()}
            >
              Voltar
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-14 py-2 rounded shadow-md hover:bg-green-500"
            >
              Enviar
            </button>
          </div>
      </form>
    </div>
  );
};

export default FeasibilityForm;


