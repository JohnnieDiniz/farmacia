import { LinkedinLogoIcon, InstagramLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <div className="w-full bg-red-600 text-white py-4 mt-auto shadow-inner border-t border-red-700">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center px-4">
        <div className="text-center md:text-left flex flex-col justify-center">
          <p className="text-2xl font-bold tracking-wider">FARMÁCIA</p>
          <p className="text-sm mt-1 text-red-200 font-medium">
            Saúde e bem-estar em um só lugar
          </p>
        </div>
        <div className="flex justify-center gap-8">
          <a href="#" className="hover:text-red-200 transform hover:scale-110 transition-all duration-300">
            <LinkedinLogoIcon size={32} weight="bold" />
          </a>
          <a href="#" className="hover:text-red-200 transform hover:scale-110 transition-all duration-300">
            <InstagramLogoIcon size={32} weight="bold" />
          </a>
          <a href="#" className="hover:text-red-200 transform hover:scale-110 transition-all duration-300">
            <GithubLogoIcon size={32} weight="bold" />
          </a>
        </div>
        <div className="text-center md:text-right text-sm text-red-200 font-medium">
          <p>Farmácia © {data}</p>
          <p className="mt-1">
            Desenvolvido por <span className="font-semibold text-white">João Vitor Diniz Alves</span>
          </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;