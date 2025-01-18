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
                  Home
                </a>
              </li>
              <li>
                <a href="https://conexaolinkes.com.br/residencial/" className="hover:underline">
                  Residencial
                </a>
              </li>
              <li>
                <a href="https://conexaolinkes.com.br/empresarial/" className="hover:underline">
                  Empresarial
                </a>
              </li>
              <li>
                <a href="https://conexaolinkes.com.br/condominio/" className="hover:underline">
                  Predial
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header