import { useState } from "react";
import { Icon } from "./Icon";

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
    <>
      <div className='border-black rounded-md border-2 h-1/6 shadow-xl align-middle text-center'>
        Text here! {/* ability name etc */}
      </div>
      <div className='border-black rounded-md border-2 h-3/4 shadow-xl mt-2'>
        { hasImage && props.component }
      </div>
    </>
   
  )
}