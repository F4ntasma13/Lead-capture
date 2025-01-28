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
    "principal": "N",
    "id_cliente": "",
    "tipo_pessoa": "F",
    "cnpj_cpf": "",
    "data_nascimento": "",
    "razao": "",
    "id_filial": "1",
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
    "lead": "S",
    "ativo": "S",
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
          // router?.push(`/plans-page?data=${encodeURIComponent(JSON.stringify(data))}&id=${clientId}`);
          router?.push('https://ixc.malugainfor.net.br/app/inmap-auto-viability')
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
    <div className="relative min-h-screen bg-gradient-to-b from-blue-600 to-blue-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">





        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg border-4 border-green-500 ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Preencha as Informações</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Local de instalação</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tipo_localidade"
                      value="casa"
                      checked={data.tipo_localidade === "casa"}
                      onChange={(e) => setData({ ...data, tipo_localidade: "casa" })}
                      className="mr-2"
                    />
                    Para minha casa
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tipo_localidade"
                      value="empresa"
                      checked={data.tipo_localidade === "empresa"}
                      onChange={(e) => setData({ ...data, tipo_localidade: "empresa" })}
                      className="mr-2"
                    />
                    Para minha empresa
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder={data.tipo_localidade === "casa" ? "Nome Completo" : "Razão Social"}
                    value={data.nome}
                    onChange={(e) => setData({ ...data, nome: e.target.value })}
                    className={`w-full p-3 bg-gray-100 rounded-lg ${
                      errors.nome ? "border-red-500" : "border-gray-200"
                    } border`}
                  />
                  {errors.nome && <p className="text-red-500 text-sm mt-1">Nome é obrigatório</p>}
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="tel"
                      placeholder="Telefone"
                      value={data.fone_celular}
                      onChange={(e) => setData({ ...data, fone_celular: e.target.value })}
                      className={`w-full p-3 bg-gray-100 rounded-lg ${
                        errors.fone_celular ? "border-red-500" : "border-gray-200"
                      } border`}
                    />
                    {errors.fone_celular && <p className="text-red-500 text-sm mt-1">Telefone é obrigatório</p>}
                  </div>

                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="CEP"
                      value={data.cep}
                      onChange={(e) => setData({ ...data, cep: e.target.value })}
                      className={`w-full p-3 bg-gray-100 rounded-lg ${
                        errors.cep ? "border-red-500" : "border-gray-200"
                      } border`}
                    />
                    {errors.cep && <p className="text-red-500 text-sm mt-1">CEP é obrigatório</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className={`w-full p-3 bg-gray-100 rounded-lg ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } border`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">E-mail inválido</p>}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Enviar
              </button>
            </form>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default LeedsRegistration;





