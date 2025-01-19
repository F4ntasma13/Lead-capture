import API_CREDENTIALS from "../config/apiCredentials";

export async function POST(request: Request) {
  try {
    const data = await request.json();


    const host = API_CREDENTIALS.host;
    const token = API_CREDENTIALS.token;

    const tokenBase64 = Buffer.from(token).toString('base64');

    const leadData = {
      speed: '',
      price: '',
      details: ''
    };
    
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

    if (!response.ok) {
      const errorResponse = await response.text(); 
      console.error('Resposta da API:', errorResponse); 
      return new Response(
        JSON.stringify({
          message: "Erro ao cadastrar lead na API IXC Soft.",
          error: errorResponse,
        }),
        { status: response.status }
      );
    }

    const result = await response.json();
    return new Response(
      JSON.stringify({ message: "Lead cadastrado com sucesso!", data: result }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro interno:", error);
    return new Response(
      JSON.stringify({ message: "Erro interno no servidor.", error: error }),
      { status: 500 }
    );
  }
}


// import { NextResponse } from "next/server";

// interface LeadData {
//   speed: string;
//   price: string;
//   details: string;
// }

// export async function POST(request: Request) {
//   try {
//     const data: LeadData = await request.json();

//     if (!data.speed || !data.price || !data.details) {
//       return NextResponse.json({ message: "Por favor, preencha todos os campos." }, { status: 400 });
//     }

//     console.log("Dados recebidos:", data); 

//     return NextResponse.json({ message: "Lead cadastrado com sucesso!" });
//   } catch (error) {
//     console.error("Erro no servidor:", error);
//     return NextResponse.json({ message: "Erro interno do servidor." }, { status: 500 });
//   }
// }