// import { LOCAL_ICON_URL } from "../constants";

import { useContext } from "react";
import { PanelContext } from "../../contexts/PanelContext";

type PanelTextProps = {
  text?: string;
}

export const PanelText = (props: PanelTextProps) => {
  const { setExamineObject } = useContext(PanelContext);
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <div className='h-1/6 py-1 px-2' onClick={setExamineObject({name: props.text, details: ''})}>
      {props.text}
    </div>
  )
}