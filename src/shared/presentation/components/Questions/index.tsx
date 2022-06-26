import { CaretUp, CaretDown } from "phosphor-react";


function Questions(){
  return(
    <div className="w-full h-[346px] p-72 mt-32">
      <strong className="text-green-700 text-4xl font-semibold">
        Perguntas <span className="text-white text-4xl font-semibold">frequentes</span>
      </strong>

      <div className="w-full flex items-center justify-between">
        <div className="w-[1228px] border-b-2 border-gray-700 mt-16 pb-6">
          <div className="flex items-start justify-between">
              <p className="text-2xl font-medium text-white pb-8 block">
                Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?
              </p>

              <button onClick={()=>alert("Clickou")}>
                <CaretUp size={32} className="ml-10 text-green-700"/>
              </button>

              
          </div>

          <span className="text-sm ml-2 text-gray-500 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>

      </div>

      <div className="w-full flex items-center justify-between">
        <div className="w-[1228px] border-b-2 border-gray-700 mt-6 pb-4">
          <div className="flex items-start justify-between">
              <p className="text-2xl font-medium text-white pb-8 block">
                O que está incluído no Xbox Series X?
              </p>

              <button onClick={()=>alert("Clickou")}>
                  <CaretDown size={32} className="ml-10 text-gray-700"/>
              </button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between pb-10">
        <div className="w-[1228px] mt-16 pb-6">
          <div className="flex items-start justify-between">
                <p className="text-2xl font-medium text-white pb-8 block">
                  Como sei se minha TV é compatível com 4K?
                </p>

                <button onClick={()=>alert("Clickou")}>
                  <CaretDown size={32} className="ml-10 text-gray-700"/>
                </button>
          </div>
        </div>
      </div>    

    </div>
  )
}

export default Questions;