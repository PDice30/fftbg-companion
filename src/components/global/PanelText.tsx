// import { LOCAL_ICON_URL } from "../constants";

import { useContext } from "react";
import { PanelContext } from "../../contexts/PanelContext";
import { ToolTipType } from "../../models";

type PanelTextProps = {
  text?: string;
  toolTipType: ToolTipType
}

export const PanelText = (props: PanelTextProps) => {
  const { setExamineText, setToolTipType } = useContext(PanelContext);
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
    <div className='h-1/6 py-1 px-2' onClick={() => {
      setExamineText(props.text)
      setToolTipType(props.toolTipType);
    }}>
      {props.text}
    </div>
  )
}