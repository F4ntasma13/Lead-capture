import API_CREDENTIALS from "../config/apiCredentials";

export async function POST(request: Request) {
  try {
    const leadData = await request.json();
    const host = API_CREDENTIALS.host;
    const token = API_CREDENTIALS.token;

    const tokenBase64 = Buffer.from(token).toString('base64');

    console.log('🔵 Dados enviados para API:', JSON.stringify(leadData, null, 2));

    const response = await fetch(`${host}/webservice/v1/contato`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${tokenBase64}`,
      },
      body: JSON.stringify({
        ativo: "S",
        tipo_pessoa: "F",
        cnpj_cpf: leadData.cnpj_cpf, // Campo obrigatório
        contribuinte_icms: "I",
        tipo_assinante: "1",
        cep: leadData.cep, // Campo obrigatório
        endereco: leadData.endereco, // Campo obrigatório
        numero: leadData.numero, // Campo obrigatório
        bairro: leadData.bairro, // Campo obrigatório
        cidade: leadData.cidade, // Campo obrigatório
        tipo_localidade: "U",
        iss_classificacao_padrao: "00",
        ...leadData // Permite adicionar outros campos opcionais
      })
    });

    console.log('🟡 Status da resposta:', response.status);

    if (!response.ok) {
      const errorResponse = await response.text();
      console.error('🔴 Erro na resposta da API:', errorResponse);
      return new Response(
        JSON.stringify({
          message: "Erro ao cadastrar cliente na API IXC Soft.",
          error: errorResponse,
        }),
        { status: response.status }
      );
    }

    const result = await response.json();
    console.log('🟢 Resposta completa da API:', JSON.stringify(result, null, 2));

    if (result.tipo === 'error' || result.situacao === 'error') {
      console.error('🔴 Erro retornado pela API:', result);
      return new Response(
        JSON.stringify({
          message: "Erro ao cadastrar cliente na API IXC Soft.",
          error: result.mensagem || "Erro não especificado",
        }),
        { status: 400 }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: "Cliente cadastrado com sucesso!", 
        data: result 
      }),
      { status: 201 }
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