import { useContext, useEffect, useRef, useState } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { ToolTips } from "../../models";
import { BASE_IMAGE_URL, NOTABLES } from "../../constants";
import { getSizeUp } from "../../utils/textHelper";
import { Tooltip } from "@mui/material";

export const Examine = () => {
  const [showPointer, setShowPointer] = useState(false);
  const { examineText, toolTips, toolTipType, unit, textSize } = useContext(OverlayContext);
  const scrollRef = useRef(null);

  const placeHolderText = '<- Click on an Item or Ability to find out more info';

  let string;
  let detailDisplay;

  let pointerClass = 'pointerAnimation absolute rotate-90 scale-90 right-pointer ';
  if (textSize === 'text-2xl') pointerClass += 'top-48';
  else if (textSize === 'text-xl')  pointerClass += 'top-40';
  else if (textSize === 'text-lg')  pointerClass += 'top-32';
  
  useEffect(() => {
    if (scrollRef.current) {
      if ((scrollRef.current as HTMLDivElement).scrollHeight > (scrollRef.current as HTMLDivElement).clientHeight) {
        setShowPointer(true);
     } else {
      setShowPointer(false);
     }
    }
  }, [examineText])

  switch (toolTipType) {
    case 'ClassSkills':
      detailDisplay = unit.ClassSkills.map((skill, index) => {
        let style = 'inline-block';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        style += NOTABLES.includes(skill) ? ' font-extrabold' : '';
        return (
          <Tooltip key={index} title={toolTips['Ability']?.get(skill)} arrow placement='left'>
            <p className={style} key={index}>{' ' + skill + ((index + 1 === unit.ClassSkills.length) ? '' : ', ')}</p>
          </Tooltip>
        )
      });
      break;
    case 'ExtraSkills':
      detailDisplay = unit.ExtraSkills.map((skill, index) => {
        let style = 'inline-block';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        style += NOTABLES.includes(skill) ? ' font-extrabold' : '';
        return (
          <Tooltip key={index} title={toolTips['Ability']?.get(skill)} arrow placement='left'>
            <p className={style} key={index}>{' ' + skill + ((index + 1 === unit.ExtraSkills.length) ? '' : ', ')}</p>
          </Tooltip>
        )
      });
      break;
    default:
      string = toolTips[toolTipType as keyof ToolTips]?.get(examineText);
      if (typeof string === 'string') {
        detailDisplay = string;
      } else {
        detailDisplay = '';
      }
      break;
  }

  return (
    <>
      { examineText !== '' ?
        <div className={'h-full w-4/16 left float-left align-middle p-1 ' + textSize}>
          <>
            <div className={'border-unit-panel border-2 h-1/6 align-middle text-center ' + getSizeUp(textSize)}>
              { examineText }
            </div>
            <div ref={scrollRef} className='border-unit-panel border-2 h-3/4 mt-2 align-middle text-center overflow-scroll scroll'>
              { detailDisplay }
              { showPointer && <img className={pointerClass} src={BASE_IMAGE_URL + 'pointer.png'}/> }
            </div>
          </>
        </div>
      :
        <>
          <div className='h-1/4'></div>
          <div className='h-1/2'>
            <div className={'align-middle ' + textSize}>
              {placeHolderText}
            </div>
          <div className='h-1/4'></div>
          </div>
        </>
      }
    </>
  )
}