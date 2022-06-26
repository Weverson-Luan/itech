import Image from "next/image";

const Navigation = () => (

  <header className="flex items-center justify-around pl-24 pr-24 mt-6">
    <div className="mt-2"> 
       <Image src="/assets/images/logo-xbox.svg" width={120} height={44} />
    </div>
     
    <ul className="flex items-center m-2">
        <li className="m-4">
          <a href="#" className="text-transform: uppercase font-medium text-sm">Visão Geral</a>
        </li>

        <li className="m-4">
          <a href="#" className="text-transform: uppercase font-medium text-sm"> Jogos </a>
        </li>

        <li className="m-4">
          <a href="#" className="text-transform: uppercase font-medium text-sm">Galeria</a>
        </li>

        <li className="m-4">
          <a href="#" className="text-transform: uppercase font-medium text-sm">Unbox</a>
        </li>

    </ul>

     <button className="bg-green-700 h-10 w-48 text-center ml-4">
        <p className="text-black font-bold text-transform: uppercase text-xs">ver disponibilidade</p>
     </button>
  </header>
  
);

/**
 * EXPORT COMPONENT
 */
export default Navigation;