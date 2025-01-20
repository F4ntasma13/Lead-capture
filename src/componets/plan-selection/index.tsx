"use client";

import { useRouter } from "next/navigation";

const PlanSelection: React.FC = () => {
  const router = typeof window !== "undefined" ? useRouter() : null;

  const plans = [
    { speed: "360 MEGA", price: "R$ 79,90/mês", details: "PLANO IDEAL PARA REDES SOCIAIS 360MB" },
    { speed: "500 MEGA", price: "R$ 99,90/mês", details: "PLANO INTERNET + 1 APP STANDARD 500MB" },
    { speed: "700 MEGA", price: "R$ 129,90/mês", details: "PLANO INTERNET + 1 APP PREMIUM + 2 APPS STANDARD 700MB" },
    { speed: "700 MEGA", price: "R$ 129,90/mês", details: "PLANO INTERNET + GLOBOPLAY 700MB" },
  ];

  const handleSelectPlan = async (plan: typeof plans[0]) => {
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plan),
      });

      if (response.ok) {
        if (router) {
          router.push("/feasibilityPage");
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
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Escolha seu plano</h1>
        <p className="text-gray-600 mb-6">Agora chegou a hora de escolher o melhor plano para a sua conexão:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-[#0849C8] shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-[#00E36D]">{plan.speed}</h2>
                <p className="text-gray-600 text-white">{plan.details}</p>
                <p className="text-orange-500 font-bold text-white text-lg mt-4">{plan.price}</p>
              </div>
              <button
                onClick={() => handleSelectPlan(plan)}
                className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
              >
                Selecionar
              </button>
            </div>
          ))}
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

