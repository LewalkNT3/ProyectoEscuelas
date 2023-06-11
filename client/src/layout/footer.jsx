import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
        >
          <span> Si necesitas ayuda contactate al +54 11 6523-1126</span>
          <span>
            Profesores, está página fue creada para la mejor articulación del
            equipo de orientación y ustedes. Recuerden que posee información
            confidencial que no se debe difundir
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
