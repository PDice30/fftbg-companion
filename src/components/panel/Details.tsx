import { useContext } from "react";
import { PanelContext } from "../../contexts/PanelContext";

export const Details = () => {
  const { unit } = useContext(PanelContext);
  
  return (
    <div className='h-full w-3/16 float-left text-2xl px-2'>
      <div className='h-1/6 text-3xl'>{unit.Name ? unit.Name.slice(0, 12) : 'Fighter'}</div>
      <div className='h-1/6'>{unit.Gender}</div>
      <div className='h-1/6'>Brave: {unit.Brave}</div>
      <div className='h-1/6'>Faith: {unit.Faith}</div>
      <div className='h-1/6'>{unit.Class}</div>
      <div className='h-1/6'>{unit.Sign}</div>
    </div>
  )
}