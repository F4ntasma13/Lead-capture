// "use client"

// import { useState } from "react";

// const LeedsRegistration: React.FC = () => {
//   const [data, setData] = useState({
//     local: "casa",
//     nome: "",
//     email: "",
//     fone_residencial: "",
//     cep: "",
//   });

// const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/leads", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
  
//       if (response.ok) {
//         alert("Cadastro realizado com sucesso!");
//         setData({ local: "casa", nome: "", email: "", fone_residencial: "", cep: "" });
//       } else {
//         const errorData = await response.json();
//         alert(errorData.message || "Erro ao cadastrar. Tente novamente.");
//       }
//     } catch (error) {
//       console.error("Erro:", error);
//       alert("Erro ao conectar com a API.");
//     }
//   };
  

//   return (
//     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
//       >
//         <h2 className="text-2xl font-bold mb-4 text-gray-800">
//           Preencha as informações corretamente
//         </h2>
//         <p className="text-sm text-gray-600 mb-6">
//           Por favor, escolha o local de instalação e insira seus dados
//         </p>
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-gray-700">
//             Local de instalação
//           </label>
//           <div className="flex items-center space-x-4 mt-2">
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="local"
//                 value="casa"
//                 checked={data.local === "casa"}
//                 onChange={() => setData({ ...data, local: "casa" })}
//                 className="text-blue-600 focus:ring-blue-500"
//               />
//               <span className="ml-2 text-gray-700">Para minha casa</span>
//             </label>
//             <label className="flex items-center">
//               <input
//                 type="radio"
//                 name="local"
//                 value="empresa"
//                 checked={data.local === "empresa"}
//                 onChange={() => setData({ ...data, local: "empresa" })}
//                 className="text-blue-600 focus:ring-blue-500"
//               />
//               <span className="ml-2 text-gray-700">Para minha empresa</span>
//             </label>
//           </div>
//           <p className="text-xs text-gray-500 mt-2">
//             * O local de instalação deve ser compatível com a escolha realizada.
//           </p>
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Nome Completo"
//             value={data.nome}
//             onChange={(e) => setData({ ...data, nome: e.target.value })}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="email"
//             placeholder="E-mail"
//             value={data.email}
//             onChange={(e) => setData({ ...data, email: e.target.value })}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>
//         <div className="mb-4">
//           <input
//             type="text"
//             placeholder="Telefone de Contato"
//             value={data.fone_residencial}
//             onChange={(e) => setData({ ...data, fone_residencial: e.target.value })}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>
//         <div className="mb-6">
//           <input
//             type="text"
//             placeholder="CEP"
//             value={data.cep}
//             onChange={(e) => setData({ ...data, cep: e.target.value })}
//             className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
//         >
//           Próximo
//         </button>
//       </form>
//     </div>
//   );
// };




// export default LeedsRegistration






"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const LeedsRegistration: React.FC = () => {
  const [data, setData] = useState({
    local: "casa",
    nome: "",
    email: "",
    fone_residencial: "",
    cep: "",
  });

  const router = typeof window !== "undefined" ? useRouter() : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // alert("Cadastro realizado com sucesso!");
        setData({
          local: "casa",
          nome: "",
          email: "",
          fone_residencial: "",
          cep: "",
        });

        if (router) {
          router.push("/plansPage");
        }
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Erro ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao conectar com a API.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Preencha as informações corretamente
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Por favor, escolha o local de instalação e insira seus dados
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Local de instalação
          </label>
          <div className="flex items-center space-x-4 mt-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="local"
                value="casa"
                checked={data.local === "casa"}
                onChange={() => setData({ ...data, local: "casa" })}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Para minha casa</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="local"
                value="empresa"
                checked={data.local === "empresa"}
                onChange={() => setData({ ...data, local: "empresa" })}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Para minha empresa</span>
            </label>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            * O local de instalação deve ser compatível com a escolha realizada.
          </p>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder={data.local === "casa" ? "Nome Completo" : "Razão Social"}
            value={data.nome}
            onChange={(e) => setData({ ...data, nome: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-mail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Telefone de Contato"
            value={data.fone_residencial}
            onChange={(e) => setData({ ...data, fone_residencial: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="CEP"
            value={data.cep}
            onChange={(e) => setData({ ...data, cep: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Próximo
        </button>
      </form>
    </div>
  );
};

export default LeedsRegistration;





