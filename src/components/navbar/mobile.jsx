export const Mobile = () => {
  return (
    <nav className="pt-4 pb-4 h-screen rounded-md shadow-md lg:hidden">
      <div className="flow-root">
        <div className="flex flex-col px-6 -my-2 space-y-1">
          <a
            href="#service"
            title=""
            onClick={() => setIsVisible(false)}
            className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Serviços
          </a>

          <a
            href="#aboutUs"
            title=""
            onClick={() => setIsVisible(false)}
            className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Sobre nós
          </a>

          <a
            href="#contacts"
            title=""
            onClick={() => setIsVisible(false)}
            className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
          >
            Contactos
          </a>
        </div>
      </div>
    </nav>
  );
};
