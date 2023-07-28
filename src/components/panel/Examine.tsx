import { useState } from "react";
import { Icon } from "../global/Icon";

type ExamineProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
}

export const Examine = (props: ExamineProps) => {
  const [hasImage, setHasImage] = useState(false);

  if (typeof props.component === typeof Icon) {
    setHasImage(true);
  }

  return (
    <div className='h-full w-4/16 float-left text-2xl align-middle p-1'>
      <div className='border-unit-panel border-2 h-1/6 align-middle text-center'>
        Item/Ability Name
      </div>
      <div className='border-unit-panel border-2 h-3/4 mt-2 align-middle text-center'>
        { hasImage && props.component }
          Item/Ability Description
      </div>
    </div>
   
  )
}