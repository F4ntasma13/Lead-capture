import Footer from '@/componets/footer';
import Header from '@/componets/header';
import Head from 'next/head';

export default function ConexaoLink() {
  return (
    <div className="bg-gray-100">
      <Header />  
      <main>
        <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">A Internet que Entende Você</h2>
            <p className="text-lg mb-6">Velocidade, qualidade, streaming e aplicativos</p>
            <div className="flex justify-center items-center space-x-4">
              <img src="/logos/globoplay.png" alt="Globoplay" className="h-10" />
              <img src="/logos/max.png" alt="Max" className="h-10" />
              <img src="/logos/deezer.png" alt="Deezer" className="h-10" />
              <img src="/logos/primevideo.png" alt="Prime Video" className="h-10" />
            </div>
            <button className="mt-8 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">Quero Internet Rápida</button>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">Conheça Nossos Planos</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Plano Card */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-2xl font-bold">360 Mega</h4>
                <p className="text-blue-600 font-semibold text-lg">R$ 79,90/mês</p>
                <ul className="mt-4 space-y-2">
                  <li>Instalação Gratuita</li>
                  <li>Roteador Incluso</li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Contrate Agora
                </button>
              </div>
              {/* Outros Planos */}
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-2xl font-bold">500 Mega</h4>
                <p className="text-blue-600 font-semibold text-lg">R$ 99,90/mês</p>
                <ul className="mt-4 space-y-2">
                  <li>Instalação Gratuita</li>
                  <li>Roteador Incluso</li>
                  <li>Internet + Aplicativos</li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Contrate Agora
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-2xl font-bold">700 Mega</h4>
                <p className="text-blue-600 font-semibold text-lg">R$ 129,90/mês</p>
                <ul className="mt-4 space-y-2">
                  <li>Wi-Fi Turbo</li>
                  <li>Internet + 2 Apps Premium</li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Contrate Agora
                </button>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-2xl font-bold">700 Mega (Globoplay)</h4>
                <p className="text-blue-600 font-semibold text-lg">R$ 129,90/mês</p>
                <ul className="mt-4 space-y-2">
                  <li>Wi-Fi Turbo</li>
                  <li>Internet + Globoplay</li>
                </ul>
                <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700">
                  Contrate Agora
                </button>
              </div>
            </div>
          </div>
        </section>
                {/* Depoimentos Section */}
                <section className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">O que nossos clientes dizem:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p>"Muito boa, profissionais atenciosos e comprometidos."</p>
                <p className="mt-4 text-blue-600 font-bold">- Ana Carla A. Santos</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p>"Técnicos simpáticos, atenciosos e rápidos."</p>
                <p className="mt-4 text-blue-600 font-bold">- Franciele Schunk</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p>"Melhor atendimento e suporte técnico que já experimentei."</p>
                <p className="mt-4 text-blue-600 font-bold">- Danyara Araújo</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">Dicas do Técnico</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-4">O que é Wi-Fi 6?</h4>
                <p>Conheça os benefícios desta tecnologia...</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-4">Wi-Fi lento?</h4>
                <p>Saiba como resolver...</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-4">Configuração ideal</h4>
                <p>Dicas para melhorar o desempenho da sua rede...</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h4 className="text-xl font-bold mb-4">Posicionamento do roteador</h4>
                <p>Descubra o melhor lugar para instalar seu roteador...</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
