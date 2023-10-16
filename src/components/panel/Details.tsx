import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { getSizeUp } from "../../utils/textHelper";
import { Tooltip } from "@mui/material";

export const Details = () => {
  const { unit, toolTips, textSize } = useContext(OverlayContext);

  let name = unit.Name ? unit.Name.slice(0, 12) : 'Fighter';
  let nameStyle = 'h-1/6 ' + getSizeUp(textSize);

  if (unit.RaidBoss) {
    name = ('[!] ' + name).slice(0, 12);
    nameStyle += ' font-extrabold';
  }

  const classTooltip = unit.Class.replaceAll(' ', '') + (unit.Gender === 'Monster' ? '' : ' ' + unit.Gender);

  return (
    <div className={'h-full w-3/16 float-left px-2 ' + textSize}>
      <div className={nameStyle}>{name}</div>
      <div className='h-1/6'>{unit.Gender}</div>
      <div className='h-1/6'>Brave: {unit.Brave}</div>
      <div className='h-1/6'>Faith: {unit.Faith}</div>
      <Tooltip title={toolTips['Class']?.get(classTooltip)} arrow placement='right'>
        <div className='h-1/6'>{unit.Class}</div>
      </Tooltip>
      <Tooltip title={toolTips['Zodiac']?.get(unit.Sign)} arrow placement='right'>
        <div className='h-1/6'>{unit.Sign}</div>
      </Tooltip>
    </div>
  )
}