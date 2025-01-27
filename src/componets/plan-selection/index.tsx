'use client';

import { useRouter, useSearchParams } from "next/navigation";

const PlanSelection: React.FC = () => {

  const router = typeof window !== "undefined" ? useRouter() : null;
  const searchParams = typeof window !== "undefined" ? useSearchParams() : null;

  const clientId = searchParams?.get("id")
  const dataString = searchParams?.get("data");

  const dataObject = dataString ? JSON.parse(dataString) : null;

  const Nome = dataObject?.nome;
  const Email = dataObject?.email;
  const FoneCelular = dataObject?.fone_celular;
  const DataCadastro = dataObject?.data_cadastro;
  const Cep = dataObject?.cep;
  const Numero = dataObject?.numero;

  const plans = [
    { speed: "360MB", price: "R$ 79,90/mês", details: "PLANO IDEAL PARA REDES SOCIAIS 360MB" },
    { speed: "500MB", price: "R$ 99,90/mês", details: "INTERNET + 1 APP STANDARD 500MB" },
    { speed: "700MB", price: "R$ 129,90/mês", details: "INTERNET + 1 APP PREMIUM, 2 STANDARD" },
    { speed: "700MB", price: "R$ 129,90/mês", details: "INTERNET + GLOBOPLAY 700MB" },
  ];

  const handleSelectPlan = async (obs: typeof plans[0]) => {
    const updateData = {
      id: clientId,
      nome: Nome,
      email: Email,
      fone_celular: FoneCelular,
      data_cadastro: DataCadastro,
      cep: Cep,
      numero: Numero,
      obs
    };

    try {
      const response = await fetch("/api/updateLeads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });

      if (response.ok) {
        if (router) {
          router?.push(`/feasibility-page?data=${encodeURIComponent(JSON.stringify(updateData))}&id=${clientId}&data=${obs}`)
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Erro ao selecionar o plano. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao conectar com a API:", error);
      alert("Erro ao conectar com a API.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-900 min-h-screen">
    <main className="container mx-auto py-6">
      <h1 className="text-2xl font-bold text-white mb-4">Escolha seu plano</h1>
      <p className="text-white mb-6">Agora chegou a hora de escolher o melhor plano para a sua conexão:</p>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((obs, index) => (
            <div
              key={index}
              className="bg-[#0849C8] shadow-md rounded-lg p-6 border border-green-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-5xl font-bold text-white">{obs.speed}</h2>
                <p className="text-white py-8">{obs.details}</p>
                <div className="flex-grow flex items-center py-24 justify-center">
                    <p className="flex text-white font-bold text-2xl mt-4">{obs.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleSelectPlan(obs)}
                className="mt-4 bg-green-500 text-blue-900 px-4 py-2 rounded hover:bg-green-600"
              >
                Selecionar
              </button>
            </div>
          ))}
        </div>
        <div className="w-full lg:w-1/3 flex justify-center items-center mt-6 lg:mt-0">
          <img src="man.webp" alt="Pessoa olhando para os planos" className="max-h-96 lg:max-h-full w-auto" />
        </div>
      </div>
      <div className="flex justify-start mt-6">
        <button
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => router?.back()}
        >
          Voltar
        </button>
      </div>
    </main>
  </div>


  );
};

export default PlanSelection;





