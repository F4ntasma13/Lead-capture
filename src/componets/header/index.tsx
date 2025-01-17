const Header = () => {
    return (
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
                <a href="https://conexaolinkes.com.br/" className="hover:underline">
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
    )
}

export default Header