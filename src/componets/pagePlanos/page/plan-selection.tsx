export default function PlanSelection() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Cabeçalho */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/logoCl.png" alt="Logo" className="h-16" />
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:underline">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container mx-auto my-6">
        {/* <ul className="flex justify-between items-center">
          {["Início", "Plano", "Viabilidade", "Agendamento", "Dados", "Pagamento", "Resumo", "Protocolo"].map(
            (step, index) => (
              <li
                key={index}
                className={`flex-1 text-center ${
                  index === 1 ? "text-blue-500 font-bold" : "text-gray-400"
                }`}
              >
                <span className="block text-sm">{index + 1}. {step}</span>
                {index === 1 && <div className="h-1 bg-blue-500 mt-1" />}
              </li>
            )
          )}
        </ul> */}
      </div>

      {/* Conteúdo principal */}
      <main className="container mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Escolha seu plano</h1>
        <p className="text-gray-600 mb-6">Escolha o melhor plano para sua casa</p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6s">
          {[
            { speed: "360 MEGA", price: "R$ 59,90/mês", details: "PLANO IDEAL 360MB CONEXÃO LINK" },
            { speed: "460 MEGA", price: "R$ 99,90/mês", details: "NEW 460MB LOGA N.C + CLUBE" },
            { speed: "750 MEGA", price: "R$ 99,90/mês", details: "AGR 750MB LOGA PF + CLUBE" },
            { speed: "660 MEGA", price: "R$ 139,90/mês", details: "NEW 660MB LOGA N.C + CL" },
          ].map((plan, index) => (
            <div
              key={index}
              className="bg-black shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-white">{plan.speed}</h2>
              <p className="text-gray-600">{plan.details}</p>
              <p className="text-orange-500 font-bold text-lg mt-4">{plan.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">
            Voltar
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            Continuar
          </button>
        </div>
      </main>
           
    </div>

  );
}
  