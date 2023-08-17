import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { ToolTips } from "../../models";
import { NOTABLES } from "../../constants";
import { getSizeUp } from "../../utils/textHelper";

export const Examine = () => {
  const { examineText, toolTips, toolTipType, unit, textSize } = useContext(OverlayContext);
  const placeHolderText = '<- Click on an Item or Ability to find out more info';

  let string;
  let detailDisplay;

  switch (toolTipType) {
    case 'ClassSkills':
      detailDisplay = unit.ClassSkills.map((skill, index) => {
        console.log(index);
        let style = 'inline-block';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        style += NOTABLES.includes(skill) ? ' font-extrabold' : '';
        return (
          <p className={style} key={index}>{' ' + skill + ((index + 1 === unit.ClassSkills.length) ? '' : ', ')}</p>
        )
      });
      break;
    case 'ExtraSkills':
      detailDisplay = unit.ExtraSkills.map((skill, index) => {
        let style = 'inline-block';
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        style += NOTABLES.includes(skill) ? ' font-extrabold' : '';
        return (
          <p className={style} key={index}>{' ' + skill + ((index + 1 === unit.ExtraSkills.length) ? '' : ', ')}</p>
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
            <div className='border-unit-panel border-2 h-3/4 mt-2 align-middle text-center overflow-scroll scroll'>
              { detailDisplay }
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