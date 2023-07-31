import { useContext, useState } from "react";
import { Icon } from "../global/Icon";
import { PanelContext } from "../../contexts/PanelContext";

export type ExamineProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name: string,
  details: string
  component?: any;
}

export const Examine = () => {
  const [hasImage, setHasImage] = useState(false);

  const { examineObject } = useContext(PanelContext);

  if (typeof examineObject === typeof Icon) {
    setHasImage(true);
  }

  return (
    <>
    { examineObject.name !== '' && 
      <div className='h-full w-4/16 float-left text-2xl align-middle p-1'>
        <div className='border-unit-panel border-2 h-1/6 align-middle text-center'>
          {examineObject.name}
        </div>
        <div className='border-unit-panel border-2 h-3/4 mt-2 align-middle text-center'>
          { hasImage }
            
        </div>
      </div>
    }
    </>
   
  )
}