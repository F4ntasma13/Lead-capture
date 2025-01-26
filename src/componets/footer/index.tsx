import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillTikTok, AiFillFacebook  } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gradient-to-b from-blue-900 to-blue-900 text-white py-4 text-center">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 Todos os direitos reservados | Desenvolvido por Conexão Link
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://api.whatsapp.com/send?phone=2740424240" className="text-blue hover:text-gray-400">
              <FaWhatsappSquare size={32}/>
            </a>
            <a href="https://www.instagram.com/conexaolink.es/" className="text-white hover:text-gray-400" >
              <FaInstagramSquare size={32}/>
            </a>
            <a href="https://www.facebook.com/conexaolinkes.fibra" className="text-white hover:text-gray-400">
              <AiFillFacebook size={32} />
            </a>
            <a href="https://www.tiktok.com/@conexaolink.es" className="text-white hover:text-gray-400">
            <AiFillTikTok size={32}/>
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer