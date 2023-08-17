import { useContext, useState } from "react"
import { Unit } from "../models"
import { UnitPanel } from "./UnitPanel"
import { OverlayContext } from "../contexts/OverlayContext"

type PortraitProps = {
  key: string,
  unit: Unit,
  side: number,
  index: number,
}

/**
 * Panel probably won't display any data, it will just be for the mouseover for the pane to display
 *  
 * @param props 
 * @returns 
 */
export const Portrait = (props: PortraitProps) => {
  const { setUnit, setExamineText } = useContext(OverlayContext)
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsShown(true);
        setUnit(props.unit);
      }}
      onMouseLeave={() => {
        setIsShown(false);
        setExamineText('');
      }}>
        <div>
          { isShown && 
            <UnitPanel unit={props.unit} side={props.side} index={props.index} />
          }
        </div>
    </div>
  )
}