// import API_CREDENTIALS from '../config/apiCredentials';

// export async function POST(request: Request) {
//   try {
//     const data = await request.json();

//     if (!data.nome || !data.fone_residencial) {
//       return new Response(
//         JSON.stringify({ message: "Nome e telefone são obrigatórios." }),
//         { status: 400 }
//       );
//     }

//     const host = API_CREDENTIALS.host;
//     const token = API_CREDENTIALS.token;

//     const leadData = {
//       principal: 'N',
//       id_cliente: '',
//       nome: data.nome,
//       tipo_pessoa: 'F',
//       cnpj_cpf: data.cnpj_cpf || '',
//       email: data.email || '',
//       fone_residencial: data.fone_residencial,
//       cep: data.cep || '',
//       endereco: data.endereco || '',
//       bairro: data.bairro || '',
//       cidade: data.cidade || '',
//       lead: 'S',
//       ativo: 'S',
//     };

//     const response = await fetch(host, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(leadData),
//     });

//     if (!response.ok) {
//       const error = await response.json();
//       console.error('Erro ao cadastrar lead:', error);
//       return new Response(
//         JSON.stringify({ message: 'Erro ao cadastrar lead na API IXC Soft.' }),
//         { status: response.status }
//       );
//     }

//     const result = await response.json();
//     return new Response(
//       JSON.stringify({ message: 'Lead cadastrado com sucesso!', data: result }),
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Erro interno:', error);
//     return new Response(
//       JSON.stringify({ message: 'Erro interno no servidor.' }),
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";

interface LeadData {
  speed: string;
  price: string;
  details: string;
}

export async function POST(request: Request) {
  try {
    const data: LeadData = await request.json();

    if (!data.speed || !data.price || !data.details) {
      return NextResponse.json({ message: "Por favor, preencha todos os campos." }, { status: 400 });
    }

    console.log("Dados recebidos:", data); 

    return NextResponse.json({ message: "Lead cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json({ message: "Erro interno do servidor." }, { status: 500 });
  }
}