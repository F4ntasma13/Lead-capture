// import API_CREDENTIALS from "../config/apiCredentials";



// export async function PUT(request: Request) {
//   try {
//     const data = await request.json();

//     // // Validação do ID do lead
//     // if (!data.id) {
//     //   return new Response(
//     //     JSON.stringify({ message: "ID do lead é obrigatório para atualização." }),
//     //     { status: 400 }
//     //   );
//     // }

//     // Validação de pelo menos um campo para atualização
//     if (Object.keys(data).length <= 1) {
//       return new Response(
//         JSON.stringify({ message: "Nenhum dado para atualizar foi fornecido." }),
//         { status: 400 }
//       );
//     }

//     const baseHost = API_CREDENTIALS.host;
//     const token = API_CREDENTIALS.token;
//     const tokenBase64 = Buffer.from(token).toString('base64');

//     // Preparando os dados para atualização
//     const updateData = {
//       id: data.id, // ID obrigatório
//       nome: data.nome,
//       telefone: data.fone_residencial,
//       email: data.email,
//       cep: data.cep,
//       endereco: data.endereco,
//       bairro: data.bairro,
//       cidade: data.cidade,
//       status: data.status, // Opcional
//       origem: data.origem  // Opcional
//     };

//     const apiUrl = `${baseHost}/webservice/v1/contato`;
//     console.log('🔵 Tentando atualizar lead em:', apiUrl);
//     console.log('🔵 Dados enviados para API:', JSON.stringify({
//       registro: updateData,
//       call_type: 'update'
//     }, null, 2));

//     const response = await fetch(apiUrl, {
//       method: "PUT",
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Basic ${tokenBase64}`,
//         'ixcsoft': 'update'
//       },
//       body: JSON.stringify({
//         registro: updateData,
//         call_type: 'update'
//       })
//     });

//     console.log('🟡 Status da resposta:', response.status);
//     console.log('🟡 Headers da resposta:', JSON.stringify(Object.fromEntries(response.headers), null, 2));

//     const result = await response.json();
//     console.log('🟢 Resposta completa da API:', JSON.stringify(result, null, 2));

//     if (result.type === 'error') {
//       console.error('🔴 Erro da API IXC:', result.message);
      
//       return new Response(
//         JSON.stringify({
//           message: "Erro ao atualizar lead na API IXC",
//           error: result.message,
//           details: "Verifique se o ID está correto e se você tem permissão para atualizar"
//         }),
//         { status: 400 }
//       );
//     }

//     if (result.id || result.registroId) {
//       console.log('🟢 Lead atualizado com sucesso. ID:', result.id);
//       return new Response(
//         JSON.stringify({ 
//           message: "Lead atualizado com sucesso no CRM!", 
//           data: result,
//           leadId: result.id 
//         }),
//         { status: 200 }
//       );
//     }

//     return new Response(
//       JSON.stringify({
//         message: "Não foi possível confirmar a atualização do lead no CRM.",
//         responseData: result
//       }),
//       { status: 500 }
//     );

//   } catch (error) {
//     console.error("🔴 Erro interno:", error);
//     return new Response(
//       JSON.stringify({ 
//         message: "Erro interno no servidor.", 
//         error: error instanceof Error ? error.message : String(error)
//       }),
//       { status: 500 }
//     );
//   }
// }



//////////////////////////////////////////////////////////////////////////////////////////////////////////


import API_CREDENTIALS from "../config/apiCredentials";

export async function PUT(request: Request) {
  try {
    const { 
      id: clientId, 
      obs,
      nome: Nome, 
      email: Email,
      fone_celular: FoneCelular,
      data_cadastro: DataCadastro,
    } = await request.json();

    if (!clientId) {
      return new Response(
        JSON.stringify({ message: "ID do cliente não foi fornecido." }),
        { status: 400 }
      );
    }

    const host = API_CREDENTIALS.host;
    const token = API_CREDENTIALS.token;
    const tokenBase64 = Buffer.from(token).toString("base64");

    const response = await fetch(`${host}/webservice/v1/contato/${clientId}`, {
      method: "PUT", 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${tokenBase64}`,
      },
      body: JSON.stringify({  
        nome: Nome, 
        email: Email,
        fone_celular: FoneCelular,
        data_cadastro: DataCadastro,
        obs
      }),
    });

    const responseBody = await response.json();

    if (!response.ok) {
      console.error("🔴 Erro na resposta da API:", responseBody);
      return new Response(
        JSON.stringify({
          message: "Erro ao atualizar cliente na API IXC Soft.",
          error: responseBody,
        }),
        { status: response.status }
      );
    }

    console.log("🟢 Resposta da API:", responseBody);

    return new Response(
      JSON.stringify({
        message: "Cliente atualizado com sucesso!",
        data: responseBody,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("🔴 Erro interno:", error);
    return new Response(
      JSON.stringify({
        message: "Erro interno no servidor.",
        error: error instanceof Error ? error.message : String(error),
      }),
      { status: 500 }
    );
  }
}

  
  



//////////////////////////////////////////////////////////////////////////////////////////////////////////


