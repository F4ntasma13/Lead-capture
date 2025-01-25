'use client';

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const FeasibilityForm: React.FC = () => {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const searchParams = typeof window !== "undefined" ? useSearchParams() : null;

  const clientId = searchParams?.get("id");

  const dataString = searchParams?.get("data");
  const dataObject = dataString ? JSON.parse(dataString) : null;
  
  const Nome = dataObject?.nome || "";
  const Email = dataObject?.email || "";
  const FoneCelular = dataObject?.fone_celular || "";
  const DataCadastro = dataObject?.data_cadastro || "";
  const Cep = dataObject?.cep || "";
  const Numero = dataObject?.numero || "";
  const Bairro = dataObject?.bairro || "";
  const Referencia = dataObject?.referencia || "";
  const Obs =
  dataObject?.obs && typeof dataObject.obs === "object"
    ? `${dataObject.obs.speed} ${dataObject.obs.price} ${dataObject.obs.details}`
    : dataObject?.obs || "";

  const [formData, setFormData] = useState({
    endereco: "",
    obs: Obs,
    id: clientId,
    nome: Nome,
    email: Email,
    fone_celular: FoneCelular,
    data_cadastro: DataCadastro,
    cep: Cep,
    numero: Numero,
    bairro: Bairro,
    alerta: "",
    referencia: Referencia
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/updateLeads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
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
    <div className="bg-white min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-lg"
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
            className="w-full border border-gray-300 rounded p-2 "
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
            className="w-full border border-gray-300 rounded p-2"
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
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="obs" className="block text-gray-700 font-medium mb-2">
            Plano:
          </label>
          <input
            type="text"
            id="obs"
            name="obs"
            value={formData.obs}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="cep" className="block text-gray-700 font-medium mb-2">
            CEP:
          </label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
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
            placeholder="Digite o endereço..."
            value={formData.endereco}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>

        {/* <div className="mb-4">
          <label htmlFor="numero" className="block text-gray-700 font-medium mb-2">
            Número:
          </label>
          <input
            type="text"
            id="numero"
            name="numero"
            placeholder="Digite o número..."
            value={formData.numero}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div> */}

        {/* <div className="mb-4">
          <label htmlFor="bairro" className="block text-gray-700 font-medium mb-2">
            Bairro:
          </label>
          <input
            type="text"
            id="bairro"
            name="bairro"
            placeholder="Digite o bairro..."
            value={formData.bairro}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div> */}

        {/* <div className="mb-4">
          <label htmlFor="referencia" className="block text-gray-700 font-medium mb-2">
            Referência:
          </label>
          <input
            type="text"
            id="referencia"
            name="referencia"
            placeholder="Digite a referencia..."
            value={formData.referencia}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div> */}

        <div className="mb-4">
          <label htmlFor="alerta" className="block text-gray-700 font-medium mb-2">
            Observações:
          </label>
          <textarea
            id="alerta"
            name="alerta"
            placeholder="Horário para instalação..."
            value={formData.alerta}
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


