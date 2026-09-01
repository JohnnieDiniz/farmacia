import { LinkedinLogoIcon, GithubLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="w-full flex justify-center bg-red-600 text-white py-6 mt-auto">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        
        {/* Título e Informações */}
        <div>
          <p className="text-xl font-bold tracking-wide">FARMÁCIA</p>
          <p className="text-sm mt-1 text-red-200">
            Saúde e bem-estar em um só lugar
          </p>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex gap-6 mt-2">
          <a href="#" className="hover:text-red-300 transition-colors duration-300">
            <LinkedinLogoIcon size={32} weight="bold" />
          </a>
          <a href="#" className="hover:text-red-300 transition-colors duration-300">
            <InstagramLogoIcon size={32} weight="bold" />
          </a>
          <a href="#" className="hover:text-red-300 transition-colors duration-300">
            <GithubLogoIcon size={32} weight="bold" />
          </a>
        </div>

        {/* Direitos Autorais e Créditos */}
        <div className="text-sm text-red-200 mt-2">
          <p>Farmácia © {data}</p>
          <p className="mt-1">
            Desenvolvido por João Vitor Diniz Alves
          </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;