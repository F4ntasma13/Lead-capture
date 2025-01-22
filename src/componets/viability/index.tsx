'use client'

import React, { useState, useEffect  } from "react";
import { useRouter, useSearchParams  } from "next/navigation";

const FeasibilityForm: React.FC = () => {
  const router = typeof window !== "undefined" ? useRouter() : null;
  const searchParams = useSearchParams();

  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [formData, setFormData] = useState({
    cep: "",
    cidade: "",
    bairro: "",
    numero: "",
    complemento: "",
    local: "casa",
    endereco: "", 
    estado: 'ES',

  });

  const [error, setError] = useState("");

  useEffect(() => {
    const obs = searchParams.get("obs");
    if (obs) {
      setSelectedPlan(JSON.parse(obs));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.cep || !formData.cidade || !formData.bairro || !formData.endereco || !formData.numero) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setError("");

    try {
      const fullData = { ...formData, obs: selectedPlan };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Viabilidade enviada com sucesso! Agora é com a gente!");
        if (router) {
          router.push("https://conexaolinkes.com.br/");
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
        {selectedPlan && (
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-700">Plano Selecionado:</h3>
            <p className="text-gray-600">{selectedPlan.details}</p>
            <p className="text-orange-500 font-bold">{selectedPlan.price}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
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
              name="endereco"
              placeholder="Rua"
              value={formData.endereco}
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


// 'use client';

// import React, { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// const FeasibilityForm: React.FC = () => {
//   const router = typeof window !== "undefined" ? useRouter() : null;
//   const searchParams = useSearchParams();

//   const [selectedPlan, setSelectedPlan] = useState<any>(null);
//   const [formData, setFormData] = useState({
//     "cep": "",
//     cidade: "",
//     "bairro": "",
//     "numero": "",
//     "complemento": "",
//     "endereco": "",
//     "uf": "",
//   });
//   const [previousData, setPreviousData] = useState<any>(null); // Armazena os dados da página inicial
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const data = searchParams.get("data");
//     if (data) {
//       const parsedData = JSON.parse(decodeURIComponent(data));
//       setPreviousData(parsedData); // Define os dados da primeira página
//       if (parsedData.obs) {
//         setSelectedPlan(parsedData.obs); // Define o plano selecionado
//       }
//     }
//   }, [searchParams]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.cep || !formData.cidade || !formData.bairro || !formData.endereco || !formData.numero) {
//       setError("Por favor, preencha todos os campos obrigatórios.");
//       return;
//     }

//     setError("");

//     try {
//       const fullData = { ...formData, ...previousData, obs: selectedPlan }; // Combina todos os dados

//       const response = await fetch("/api/leads", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(fullData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         alert("Viabilidade enviada com sucesso! Agora é com a gente!");
//         if (router) {
//           router.push("#");
//         }
//         console.log(data);
//       } else {
//         alert(`Erro: ${data.message || "Problema ao enviar os dados."}`);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Erro na comunicação com a API.");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center">
//       <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl w-full">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Local de instalação</h2>
//         {selectedPlan && (
//           <div className="mb-6">
//             <h3 className="text-lg font-bold text-gray-700">Plano Selecionado:</h3>
//             <p className="text-gray-600">{selectedPlan.details}</p>
//             <p className="text-orange-500 font-bold">{selectedPlan.price}</p>
//           </div>
//         )}
//         {previousData && (
//           <div className="mb-6">
//             <h3 className="text-lg font-bold text-gray-700">Dados do Cliente:</h3>
//             <pre className="text-gray-600 bg-gray-100 p-2 rounded">
//               {JSON.stringify(previousData, null, 2)}
//             </pre>
//           </div>
//         )}
//         <form onSubmit={handleSubmit}>
//           {error && <p className="text-red-500 mb-4">{error}</p>}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="cep"
//               placeholder="CEP"
//               value={formData.cep}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//             <input
//               type="text"
//               name="cidade"
//               placeholder="Cidade"
//               value={formData.cidade}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//             <input
//               type="text"
//               name="bairro"
//               placeholder="Bairro"
//               value={formData.bairro}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//             <input
//               type="text"
//               name="endereco"
//               placeholder="Rua"
//               value={formData.endereco}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//             <input
//               type="text"
//               name="numero"
//               placeholder="Digite o Número"
//               value={formData.numero}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//             <input
//               type="text"
//               name="complemento"
//               placeholder="Digite o Complemento"
//               value={formData.complemento}
//               onChange={handleChange}
//               className="w-full border border-gray-300 rounded px-3 py-2"
//             />
//           </div>
//           <div className="flex justify-between items-center mt-6">
//             <button
//               type="button"
//               className="bg-gray-200 text-gray-700 px-4 py-2 rounded shadow-md hover:bg-gray-300"
//               onClick={() => router?.back()}
//             >
//               Voltar
//             </button>
//             <button
//               type="submit"
//               className="bg-orange-500 text-white px-6 py-2 rounded shadow-md hover:bg-orange-600"
//             >
//               Continuar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FeasibilityForm;
