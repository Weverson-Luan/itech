/**
 * IMPORTS
 */
 import { VariantType,  useSnackbar} from "notistack";
 import { Button } from '@mui/material';
 
 
 interface Props{
   variant?: VariantType;
   onClick?: ()=> void;
 }
 /**
  * I am a button component.
  */
 const Notistack = ({variant, onClick }: Props) => {
  const { enqueueSnackbar } = useSnackbar();
 
 return ( 
     <>
      {enqueueSnackbar("Error logging in, try again", { variant })}
     </>
 );  
 };
 
 /**
  * EXPORTS
  */
 export { Notistack };
 