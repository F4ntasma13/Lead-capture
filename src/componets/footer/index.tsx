const Footer = () => {
    return (
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
    )
}

export default Footer