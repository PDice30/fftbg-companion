import { useContext } from "react";
import { PanelContext } from "../../contexts/PanelContext";
import { ToolTipType } from "../../models";
import { NOTABLES } from "../../constants";

type PanelTextProps = {
  toolTipType: ToolTipType
  text?: string;
  canBeNotable?: boolean;
}

export const PanelText = (props: PanelTextProps) => {
  const { setExamineText, setToolTipType } = useContext(PanelContext);
  let textStyle = 'h-1/6 py-1 px-2';
  if (props.canBeNotable && props.text) {
    textStyle += NOTABLES.includes(props.text) ? ' font-extrabold' : '';
  }


  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
    <div className={textStyle} 
        onClick={() => {
          setExamineText(props.text)
          setToolTipType(props.toolTipType);
    }}>
      {props.text}
    </div>
  )
}