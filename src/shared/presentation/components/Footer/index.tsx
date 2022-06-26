import Image from "next/image";

function Footer(){
  return(
    <div className="pl-72 py-10 pr-72 h-2 w-full mt-52 flex items-center justify-between mb-8">
       <Image src="/assets/images/logo-xbox.svg" width={122} height={44} />

       <div>
        <span className="text-gray-400 text-sm"> @ Microsoft 2022 </span> <span className="text-gray-400 text-sm ml-10"> Todos direitos reservados </span> 
       </div>
    </div>
  )
}

export default Footer;