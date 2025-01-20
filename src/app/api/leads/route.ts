// import API_CREDENTIALS from "../config/apiCredentials";

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();

//     // if (!data.nome || !data.fone_residencial) {
//     //   return new Response(
//     //     JSON.stringify({ message: "Nome e telefone são obrigatórios." }),
//     //     { status: 400 }
//     //   );
//     // }

//     const host = API_CREDENTIALS.host; 
//     const token = API_CREDENTIALS.token; 

//     const tokenBase64 = Buffer.from(token).toString('base64');

//     const leadData = {
//       principal: "N",
//       id_cliente: "",
//       nome: data.nome || "Sem nome",
//       tipo_pessoa: "F",
//       cnpj_cpf: data.cnpj_cpf || "",
//       email: data.email || "",
//       fone_residencial: data.fone_residencial,
//       cep: data.cep || "",
//       endereco: data.endereco || "",
//       bairro: data.bairro || "",
//       cidade: data.cidade || "",
//       lead: "S",
//       ativo: "S",
//       data_nascimento: '',
//       razao:  '',
//       id_contato_tipo: '',
//       id_candidato_tipo: '',
//       id_responsavel: '',
//       data: '',
//       id_vd_contrato: '',
//       id_tipo_elemento: '',
//       obs: '',
//       velocidade_calculada: '',
//       email_atendimento: 'N',
//       fone_comercial: '',
//       fone_celular: '',
//       fone_whatsapp: '',
//       skype: '',
//       facebook: '',
//       website: '',
//       complemento: '',
//       referencia: '',
//       latitude: '',
//       longitude: '',
//       cadastro_site: '',
//       status_viabilidade: '',
//       data_cadastro: '',
//       velocidade_calculada_lead: '',
//       quantidade_pessoas_lead: '',
//       quantidade_smart_lead: '',
//       frequencia_smart_lead: '',
//       quantidade_celular_lead: '',
//       frequencia_celular_lead: '',
//       quantidade_computador_lead: '',
//       frequencia_computador_lead: '',
//       quantidade_console_lead: '',
//       frequencia_console_lead: ''
//     };
  
//     const response = await fetch(`${host}/webservice/v1/crm_leads`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Basic ${tokenBase64}`,
//         'ixcsoft': 'listar'
//       },
//       body: JSON.stringify({
//         registro: leadData
//       })
//     });

//     if (!response.ok) {
//       const errorResponse = await response.text(); 
//       console.error('Resposta da API:', errorResponse); 
//       return new Response(
//         JSON.stringify({
//           message: "Erro ao cadastrar lead na API IXC Soft.",
//           error: errorResponse,
//         }),
//         { status: response.status }
//       );
//     }

//     const result = await response.json();
//     return new Response(
//       JSON.stringify({ message: "Lead cadastrado com sucesso!", data: result }),
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Erro interno:", error);
//     return new Response(
//       JSON.stringify({ message: "Erro interno no servidor.", error: error }),
//       { status: 500 }
//     );
//   }
// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




import API_CREDENTIALS from "../config/apiCredentials";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const host = API_CREDENTIALS.host;
    const token = API_CREDENTIALS.token;

    const tokenBase64 = Buffer.from(token).toString('base64');

    const leadData = {
      principal: "N",
      id_cliente: "",
      nome: data.nome || "S",
      tipo_pessoa: "F",
      cnpj_cpf: data.cnpj_cpf || "",
      email: data.email || "",
      fone_residencial: data.fone_residencial,
      cep: data.cep || "",
      endereco: data.endereco || "",
      bairro: data.bairro || "",
      cidade: data.cidade || "",
      lead: "S",
      ativo: "S",
      data_nascimento: '',
      razao:  '',
      id_contato_tipo: '',
      id_candidato_tipo: '',
      id_responsavel: '',
      data: '',
      id_vd_contrato: '',
      id_tipo_elemento: '',
      obs: '',
      velocidade_calculada: '',
      email_atendimento: 'N',
      fone_comercial: '',
      fone_celular: '',
      fone_whatsapp: '',
      skype: '',
      facebook: '',
      website: '',
      complemento: '',
      referencia: '',
      latitude: '',
      longitude: '',
      cadastro_site: '',
      status_viabilidade: '',
      data_cadastro: '',
      velocidade_calculada_lead: '',
      quantidade_pessoas_lead: '',
      quantidade_smart_lead: '',
      frequencia_smart_lead: '',
      quantidade_celular_lead: '',
      frequencia_celular_lead: '',
      quantidade_computador_lead: '',
      frequencia_computador_lead: '',
      quantidade_console_lead: '',
      frequencia_console_lead: '',
      speed: data.speed,
      price: data.price,
      details: data.details
    };
  
    console.log('🔵 Dados enviados para API:', JSON.stringify(leadData, null, 2));

    const response = await fetch(`${host}/webservice/v1/crm_leads`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${tokenBase64}`,
        'ixcsoft': 'listar'
      },
      body: JSON.stringify({
        registro: leadData
      })
    });

    // Log do status da resposta
    console.log('🟡 Status da resposta:', response.status);
    console.log('🟡 Headers da resposta:', JSON.stringify(Object.fromEntries(response.headers), null, 2));

    if (!response.ok) {
      const errorResponse = await response.text();
      console.error('🔴 Erro na resposta da API:', errorResponse);
      return new Response(
        JSON.stringify({
          message: "Erro ao cadastrar lead na API IXC Soft.",
          error: errorResponse,
        }),
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('🟢 Resposta completa da API:', JSON.stringify(result, null, 2));

    // Resto do código permanece o mesmo...
    if (!result || typeof result !== 'object') {
      console.error('🔴 Resposta inválida:', result);
      return new Response(
        JSON.stringify({
          message: "Resposta inválida da API IXC Soft.",
          error: "Formato de resposta inesperado"
        }),
        { status: 500 }
      );
    }

    if (result.tipo === 'error' || result.situacao === 'error' || result.success === false) {
      console.error('🔴 Erro retornado pela API:', result);
      return new Response(
        JSON.stringify({
          message: "Erro ao cadastrar lead na API IXC Soft.",
          error: result.mensagem || result.message || "Erro não especificado"
        }),
        { status: 400 }
      );
    }

    if (result.id || result.registroId || (result.retorno && result.retorno.id)) {
      const leadId = result.id || result.registroId || result.retorno.id;
      console.log('🟢 Lead cadastrado com sucesso. ID:', leadId);
      return new Response(
        JSON.stringify({ 
          message: "Lead cadastrado com sucesso!", 
          data: result,
          leadId: leadId 
        }),
        { status: 201 }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Não foi possível confirmar o cadastro do lead.",
        responseData: result
      }),
      { status: 500 }
    );

  } catch (error) {
    console.error("🔴 Erro interno:", error);
    return new Response(
      JSON.stringify({ 
        message: "Erro interno no servidor.", 
        error: error instanceof Error ? error.message : String(error)
      }),
      { status: 500 }
    );
  }
}