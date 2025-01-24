"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LeedsRegistration: React.FC = () => {

  const getCurrentDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const [data, setData] = useState({
    "nome": "",
    "principal": "",
    "id_cliente": "",
    "tipo_pessoa": "",
    "cnpj_cpf": "",
    "data_nascimento": "",
    "razao": "",
    "id_filial": "",
    "id_contato_tipo": "",
    "id_candidato_tipo": "",
    "id_campanha": "",
    "id_concorrente": "",
    "id_responsavel": "",
    "indicado_por": "",
    data_cadastro: getCurrentDate(),//Obrigatório
    "data": "",
    "id_vd_contrato": "",
    "id_tipo_elemento": "",
    "velocidade_calculada": "",
    "id_fornecedor": "",
    "lead": "",
    "ativo": "",
    "id_caixa_ftth": "",
    "distancia_caixa_mais_proxima": "",
    "id_prospeccao": "",
    "id_estagio": "",
    "ordem_kanban": "",
    "fone_residencial": "",
    "fone_comercial": "",
    "fone_celular": "",//Obrigatório
    "fone_whatsapp": "",
    "email": "",
    "skype": "",
    "facebook": "",
    "website": "",
    "cep": "",
    "endereco": "",
    "numero": "",
    "bairro": "",
    "complemento": "",
    "cidade": "",
    "uf": "",
    "referencia": "",
    "moradia": "",
    "tipo_localidade": "casa",
    "latitude": "",
    "longitude": "",
    "external_id": "",
    "external_system": "",
    "pipe_id_pessoa": "",
    "cadastro_site": "",
    "status_viabilidade": "",
    "tipo_rede": "",
    "operador_neutro": "",
    "data_ult_verificacao_viab": "",
    "caixa_mais_proxima": "",
    "data_cadastro_lead": "",
    "velocidade_calculada_lead": "",
    "quantidade_pessoas_lead": "",
    "quantidade_smart_lead": "",
    "frequencia_smart_lead": "",
    "quantidade_celular_lead": "",
    "frequencia_celular_lead": "",
    "quantidade_computador_lead": "",
    "frequencia_computador_lead": "",
    "quantidade_console_lead": "",
    "frequencia_console_lead": "",
    "obs": "",
    "alerta": "",
    "identificador": "",
    "origem_medium": "",
    "origem_campaing": "",
    "origem_source": "",
    "identificador_ultima_conversao": "",
    "conversao_duplicada_marketing": ""

  });

  const [errors, setErrors] = useState({
    nome: false,
    email: false,
    fone_celular: false,
    cep: false,
  });
  

  const router = typeof window !== "undefined" ? useRouter() : null;

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      nome: !data.nome.trim(),
      email: !isValidEmail(data.email.trim()),
      fone_celular: !data.fone_celular.trim(),
      cep: !data.cep.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json()
        const clientId = result.data.id

        // console.log("Cliente criado com sucesso. ID:", clientId);

        setData({
          "nome" : "",
          "principal": "",
          "id_cliente": "",
          "tipo_pessoa": "",
          "cnpj_cpf": "",
          "data_nascimento": "",
          "razao": "",
          "id_filial": "",
          "id_contato_tipo": "",
          "id_candidato_tipo": "",
          "id_campanha": "",
          "id_concorrente": "",
          "id_responsavel": "",
          "indicado_por": "",
          "data_cadastro": "",//Obrigatório
          "data": "",
          "id_vd_contrato": "",
          "id_tipo_elemento": "",
          "velocidade_calculada": "",
          "id_fornecedor": "",
          "lead": "",
          "ativo": "",
          "id_caixa_ftth": "",
          "distancia_caixa_mais_proxima": "",
          "id_prospeccao": "",
          "id_estagio": "",
          "ordem_kanban": "",
          "fone_residencial": "",
          "fone_comercial": "",
          "fone_celular": "",//Obrigatório
          "fone_whatsapp": "",
          "email": "",//Obrigatório
          "skype": "",
          "facebook": "",
          "website": "",
          "cep": "",
          "endereco": "",
          "numero": "",
          "bairro": "",
          "complemento": "",
          "cidade": "",
          "uf": "",
          "referencia": "",
          "moradia": "",
          "tipo_localidade": "",
          "latitude": "",
          "longitude": "",
          "external_id": "",
          "external_system": "",
          "pipe_id_pessoa": "",
          "cadastro_site": "",
          "status_viabilidade": "",
          "tipo_rede": "",
          "operador_neutro": "",
          "data_ult_verificacao_viab": "",
          "caixa_mais_proxima": "",
          "data_cadastro_lead": "",
          "velocidade_calculada_lead": "",
          "quantidade_pessoas_lead": "",
          "quantidade_smart_lead": "",
          "frequencia_smart_lead": "",
          "quantidade_celular_lead": "",
          "frequencia_celular_lead": "",
          "quantidade_computador_lead": "",
          "frequencia_computador_lead": "",
          "quantidade_console_lead": "",
          "frequencia_console_lead": "",
          "obs": "",
          "alerta": "",
          "identificador": "",
          "origem_medium": "",
          "origem_campaing": "",
          "origem_source": "",
          "identificador_ultima_conversao": "",
          "conversao_duplicada_marketing": ""
          
        });

        if (router) {
          router?.push(`/plansPage?data=${encodeURIComponent(JSON.stringify(data))}&id=${clientId}`);
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
                name="tipo_localidade"
                value="casa"
                checked={data.tipo_localidade === "casa"}
                onChange={() => setData({ ...data, tipo_localidade: "casa" })}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-gray-700">Para minha casa</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="tipo_localidade"
                value="empresa"
                checked={data.tipo_localidade === "empresa"}
                onChange={() => setData({ ...data, tipo_localidade: "empresa" })}
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
            placeholder={data.tipo_localidade === "casa" ? "Nome Completo" : "Razão Social"}
            value={data.nome}
            onChange={(e) => setData({ ...data, nome: e.target.value })}
            className={`w-full p-2 border ${
              errors.nome ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-200`}
          />
          {errors.nome && (
            <p className="text-sm text-red-500 mt-1">Nome é obrigatório.</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="E-mail"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={`w-full p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-200`}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">E-mail inválido.</p>
          )}
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Telefone de Contato"
            value={data.fone_celular}
            onChange={(e) =>
              setData({ ...data, fone_celular: e.target.value })
            }
            className={`w-full p-2 border ${
              errors.fone_celular ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-200`}
          />
          {errors.fone_celular && (
            <p className="text-sm text-red-500 mt-1">
              Telefone de contato é obrigatório.
            </p>
          )}
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="CEP"
            value={data.cep}
            onChange={(e) => setData({ ...data, cep: e.target.value })}
            className={`w-full p-2 border ${
              errors.cep ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:ring-blue-200`}
          />
          {errors.cep && (
            <p className="text-sm text-red-500 mt-1">CEP é obrigatório.</p>
          )}
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





