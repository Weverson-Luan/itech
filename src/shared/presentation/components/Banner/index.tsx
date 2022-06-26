import Image from "next/image";
import ImageFarcry6 from "../../../../../public/assets/images/farcry6.png";
import ImageCar from "../../../../../public/assets/images/car.png";
import ImagePsg from "../../../../../public/assets/images/psg.png";
import ImageManicraft from "../../../../../public/assets/images/manicraft.png";

 function Banner(){
  return(
    <div className="w-full h-32 flex items-center justify-center mt-80">
      <Image 
          width={338}
          height={640}
          src={ImageFarcry6}
          placeholder="blur" 
          alt="Image do game" 
        />

      <Image 
        width={338}
        height={640}
        src={ImageCar}
        placeholder="blur" 
        alt="Image do game" 
        />
      <Image 
        width={338}
        height={640}
        src={ImagePsg}
        placeholder="blur" 
        alt="Image do game" 
        />
      <Image 
        width={338}
        height={640}
        src={ImageManicraft}
        placeholder="blur" 
        alt="Image do game" 
        />
    </div>
  )
}

export default Banner;

