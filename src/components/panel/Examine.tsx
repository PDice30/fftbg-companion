import { useContext } from "react";
import { PanelContext } from "../../contexts/PanelContext";
import { ToolTips } from "../../models";
import { NOTABLES } from "../../constants";

export const Examine = () => {
  const { examineText, toolTips, toolTipType, unit } = useContext(PanelContext);
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
        <div className='h-full w-4/16 left float-left text-2xl align-middle p-1'>
          <>
            <div className='text-3xl border-unit-panel border-2 h-1/6 align-middle text-center'>
              { examineText }
            </div>
            <div className='border-unit-panel border-2 h-3/4 mt-2 align-middle text-center'>
              { detailDisplay }
            </div>
          </>
        </div>
      :
        <>
          <div className='h-1/4'></div>
          <div className='h-1/2'>
            <div className='text-2xl align-middle'>
              {placeHolderText}
            </div>
          <div className='h-1/4'></div>
          </div>
        </>
      }
    </>
  )
}