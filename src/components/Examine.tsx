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
      <div>
        { hasImage && props.component }
      </div>
    </>
   
  )
}