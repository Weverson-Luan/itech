import { ReactNode } from "react";


interface BoxProps {
  children: ReactNode;
} 

const Box = ( {children }: BoxProps) => {

  return(
    <div className="flex flex-col text-center justify-center w-full items-center test">
       { children }
    </div>
  )
}

export default Box;