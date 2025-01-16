import LeedsRegistration from "@/componets/cadastro/view";

export default function Home() {
  return (
    <div>
      <header className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img
            src="/logoCl.png"
            alt="Conexão Link Logo"
            className="h-16"
          />
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

      <main>
        <LeedsRegistration />
      </main>
      <footer className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 text-center">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Todos os direitos reservados | Desenvolvido por Conexão Link
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#facebook" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="#twitter" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="#linkedin" className="text-white hover:text-gray-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}


