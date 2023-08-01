import { useContext } from "react";
import { PanelContext } from "../../contexts/PanelContext";
import { ToolTips } from "../../models";
import { NOTABLES } from "../../constants";

export const Examine = () => {
  const { examineText, toolTips, toolTipType, unit } = useContext(PanelContext);
  const placeHolderText = '<- Click on an Item or Ability to find out more info'

  let string;
  let detailDisplay;

  switch (toolTipType) {
    case 'ClassSkills':
      detailDisplay = unit.ClassSkills.map((skill, index) => {
        let style = 'inline-block';
        style += NOTABLES.includes(skill) ? ' font-extrabold' : '';
        return (
          <p className={style} key={index}>{skill + ',  '}</p>
        )
      });
      break;
    case 'ExtraSkills':
      detailDisplay = unit.ExtraSkills.map((skill, index) => {
        let style = 'inline-block';
        style += NOTABLES.includes(skill) ? ' font-extrabold' : '';
        return (
          <p className={style} key={index}>{skill + ',  '}</p>
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
      <div className='h-full w-4/16 left float-left text-2xl align-middle p-1'>
        { examineText !== '' ?
          <>
            <div className='text-3xl border-unit-panel border-2 h-1/6 align-middle text-center'>
              { examineText }
            </div>
            <div className='border-unit-panel border-2 h-3/4 mt-2 align-middle text-center'>
              { detailDisplay }
            </div>
          </>
       :
          <div className="border-2 border-unit-panel">
            <div className='h-3/4'></div>
            <div className='h-1/4 p-2'>{placeHolderText}</div>
          </div>
        }
      </div>
    </>
   
  )
}