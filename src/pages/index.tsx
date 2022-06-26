import type { NextPage } from 'next'
import Image from "next/image";

/**
 * COMPONENTS
 */
import Navigation from "../shared/presentation/components/Navigation";
import Box from "../shared/presentation/components/Box";
import Banner from 'shared/presentation/components/Banner';
import Questions from 'shared/presentation/components/Questions';
import Footer from 'shared/presentation/components/Footer';

const Home: NextPage = () => {
  return (
   <div>
      <Navigation />
         <Box>
            <div className="text-center justify-center w-full mt-6">
               <h1 className="text-7xl font-medium mt-24">Xbox series X</h1>
               <p className="text-green-700 text-2xl text-transform: uppercase font-medium mt-6">pedido antecipado</p>
            </div>
            <div className="w-[878px] h-[390px] overflow-x-hidden flex justify-center relative">
               <div className="absolute w-full h-full z-10  bg-gradient-to-b from-transparent to-black up">
               
               </div>
               <img src="/assets/images/xbox.png" className="relative bottom-0" />
            </div>
         
         </Box>

         <section>
               <div className='flex items-center justify-around p-14 mt-32'>
                  <div className='w-2/6'>
                  <h3 className="w-20 text-green-700 text-6xl font-medium">Desempenho <span className="text-white text-6xl text-transform: lowercase font-medium">aperfeiçoado</span></h3>
                  
                  <p  className="w-2/2 text-white text-2xl text-transform: lowercase font-light flex-wrap mt-10">
                     O controle sem fio Xbox traz um design elegante, 
                     conforto refinado e compartilhamento instantâneo
                     para um favorito comum.
                  </p>
                  </div>

                  <Image src="/assets/images/controle-xbox.svg" width={300} height={250} />
               </div>

               <Banner />
         </section>

         <Questions />

       <Footer />
   </div>
  )
};

export default Home;
