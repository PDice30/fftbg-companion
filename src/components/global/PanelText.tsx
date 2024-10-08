import { useContext } from "react";
import { OverlayContext } from "../../contexts/OverlayContext";
import { ToolTipType } from "../../models";
import { abilityNotables, itemNotables } from "../../constants";

type PanelTextProps = {
  toolTipType: ToolTipType
  text?: string;
  canBeNotable?: boolean;
  isItem?: boolean;
  isAbility?: boolean;
}

export const PanelText = (props: PanelTextProps) => {
  const { setExamineText, setToolTipType, textSize } = useContext(OverlayContext);
  let textStyle = 'h-1/6 py-1 px-2';
  if (props.canBeNotable && props.text) {
    if (props.isItem) textStyle += itemNotables.includes(props.text) ? ' font-extrabold' : '';
    if (props.isAbility) textStyle += abilityNotables.includes(props.text) ? ' font-extrabold' : ''
  }

  const textLength = textSize === 'text-lg' ? 12 : 14;
  const text = props.text ? props.text.slice(0, textLength) : '';
  const examineText = props.text ? props.text : '';

  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return
    <div className={textStyle} 
      
    >
      <button onClick={() => {
        setExamineText(examineText.replace('*', ''));
        setToolTipType(props.toolTipType);
      }}>
        {text}
      </button>
    </div>
  )
}