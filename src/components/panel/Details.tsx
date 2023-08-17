import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { getSizeUp } from "../../utils/textHelper";

export const Details = () => {
  const { unit, textSize } = useContext(OverlayContext);

  let name = unit.Name ? unit.Name.slice(0, 12) : 'Fighter';
  let nameStyle = 'h-1/6 ' + getSizeUp(textSize);

  if (unit.RaidBoss) {
    name = ('[!] ' + name).slice(0, 12);
    nameStyle += ' font-extrabold';
  }

  // TODO: More interesting details panel
  return (
    <div className={'h-full w-3/16 float-left px-2 ' + textSize}>
      <div className={nameStyle}>{name}</div>
      <div className='h-1/6'>{unit.Gender}</div>
      <div className='h-1/6'>Brave: {unit.Brave}</div>
      <div className='h-1/6'>Faith: {unit.Faith}</div>
      <div className='h-1/6'>{unit.Class}</div>
      <div className='h-1/6'>{unit.Sign}</div>
    </div>
  )
}