const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 text-center">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Todos os direitos reservados | Desenvolvido por Conexão Link
          </p>
          <div className="flex justify-center space-x-6 mt-4">
          <a href="https://api.whatsapp.com/send?phone=2740424240" className="text-white hover:text-gray-400">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/conexaolink.es/" className="text-white hover:text-gray-400">
              Instagram
            </a>
            <a href="https://www.facebook.com/conexaolinkes.fibra" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="https://www.tiktok.com/@conexaolink.es" className="text-white hover:text-gray-400">
              Tiktok
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer