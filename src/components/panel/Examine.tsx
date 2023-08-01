import { useContext, useState } from "react";
import { Icon } from "../global/Icon";
import { PanelContext } from "../../contexts/PanelContext";
import { ToolTips } from "../../models";

export const Examine = () => {
  const [hasImage, setHasImage] = useState(false);

  const { examineText, toolTips, toolTipType, unit } = useContext(PanelContext);

  let string;
  let detailDisplay = '';

  switch (toolTipType) {
    case 'ClassSkills':
      detailDisplay = unit.ClassSkills.join(', ');
      break;
    case 'ExtraSkills':
      detailDisplay = unit.ExtraSkills.join(', ');
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
    { examineText !== '' && 
      <div className='h-full w-4/16 float-left text-2xl align-middle p-1'>
        <div className='border-unit-panel border-2 h-1/6 align-middle text-center'>
          {examineText}
        </div>
        <div className='border-unit-panel border-2 h-3/4 mt-2 align-middle text-center'>
          { hasImage }
          { 
            detailDisplay
          }
        </div>
      </div>
    }
    </>
   
  )
}