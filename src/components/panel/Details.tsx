import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";

export const Details = () => {
  const { unit } = useContext(OverlayContext);

  let name = unit.Name ? unit.Name.slice(0, 12) : 'Fighter';
  let nameStyle = 'h-1/6 text-3xl';

  if (unit.RaidBoss) {
    name = ('[!] ' + name).slice(0, 12);
    nameStyle += ' font-extrabold';
  }

  // TODO: More interesting details panel
  return (
    <div className='h-full w-3/16 float-left text-2xl px-2'>
      <div className={nameStyle}>{name}</div>
      <div className='h-1/6'>{unit.Gender}</div>
      <div className='h-1/6'>Brave: {unit.Brave}</div>
      <div className='h-1/6'>Faith: {unit.Faith}</div>
      <div className='h-1/6'>{unit.Class}</div>
      <div className='h-1/6'>{unit.Sign}</div>
    </div>
  )
}