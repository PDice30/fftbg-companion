import { useState } from "react"
import { Unit } from "../models"
import { UnitPanel } from "./UnitPanel"

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
  const [isShown, setIsShown] = useState(false);
  const unit = props.unit;

  return (
    <div
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}>
        <div>
          { isShown && 
            <UnitPanel unit={unit} side={props.side} />
          }
        </div>
    </div>
    
  )
}