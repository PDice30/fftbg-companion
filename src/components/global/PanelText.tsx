import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { ToolTipType } from "../../models";
import { NOTABLES } from "../../constants";

type PanelTextProps = {
  toolTipType: ToolTipType
  text?: string;
  canBeNotable?: boolean;
}

export const PanelText = (props: PanelTextProps) => {
  const { setExamineText, setToolTipType, textSize } = useContext(OverlayContext);
  let textStyle = 'h-1/6 py-1 px-2';
  if (props.canBeNotable && props.text) {
    textStyle += NOTABLES.includes(props.text) ? ' font-extrabold' : '';
  }

  const textLength = textSize === 'text-2xl' ? 14 : 12;
  const text = props.text ? props.text.slice(0, textLength) : '';
  const examineText = props.text ? props.text : '';

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
    <div className={textStyle} 
      onClick={() => {
        setExamineText(examineText.replace('*', ''));
        setToolTipType(props.toolTipType);
      }}
    >
      {text}
    </div>
  )
}