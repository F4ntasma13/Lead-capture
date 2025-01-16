// "use client"

// import { useRouter } from "next/navigation";

// export default function PlanSelection() {
//   const router = useRouter();
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <img src="/logoCl.png" alt="Logo" className="h-16" />
//           <nav>
//             <ul className="flex space-x-4">
//               <li>
//                 <a href="#home" className="hover:underline">
//                   Início
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:underline">
//                   Sobre
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="hover:underline">
//                   Contato
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//       <main className="container mx-auto">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">Escolha seu plano</h1>
//         <p className="text-gray-600 mb-6">Agora chegou a hora de escolher o melhor plano para a sua conexão!</p>
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6s">
//           {[
//             { speed: "360 MEGA", price: "R$ 79,90/mês", details: "PLANO IDEAL PARA REDES SOCIAIS 360M" },
//             { speed: "500 MEGA", price: "R$ 99,90/mês", details: "PLANO INTERNET + 1 APP STANDARD 500MB" },
//             { speed: "700 MEGA", price: "R$ 129,90/mês", details: "PLANO INTERNET + 1 APP PREMIUM + 2 APPS STANDARD" },
//             { speed: "700 MEGA", price: "R$ 129,90/mês", details: "PLANO INTERNET + GLOBOPLAY 700M" },
//           ].map((plan, index) => (
//             <div
//               key={index}
//               className="bg-[#0849C8] shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg"
//             >
//               <h2 className="text-xl font-bold text-[#00E36D]">{plan.speed}</h2>
//               <p className="text-gray-600 text-white">{plan.details}</p>
//               <p className="text-orange-500 font-bold text-white text-lg mt-4">{plan.price}</p>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-between mt-6">
//           <button 
//             className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
//             onClick={() => router.back()}
//           >
//             Voltar
//           </button>
//           <button 
//             className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//             onClick={() => router.push("/test")}
//           >
//             Continuar
//           </button>
//         </div>
//       </main>
           
//     </div>

//   );
// }
  

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
      const response = await fetch("/api/ixc-soft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(plan),
      });

      if (response.ok) {
        alert(`Plano ${plan.speed} selecionado com sucesso!`);
        if (router) {
          router.push("/confirmacao"); // Redirecionar para a próxima etapa
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
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/logoCl.png" alt="Logo" className="h-16" />
        </div>
      </header>
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

