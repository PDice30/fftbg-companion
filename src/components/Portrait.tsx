import { useContext, useState } from "react"
import { Unit } from "../models"
import { UnitPanel } from "./UnitPanel"
import { PanelContext } from "../contexts/PanelContext"

type PortraitProps = {
  key: string,
  unit: Unit,
  side: number
}

/**
 * Panel probably won't display any data, it will just be for the mouseover for the pane to display
 *  
 * @param props 
 * @returns 
 */
export const Portrait = (props: PortraitProps) => {
  const { setUnit, setExamineText } = useContext(PanelContext)
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
            <UnitPanel unit={props.unit} side={props.side} />
          }
        </div>
    </div>
  )
}