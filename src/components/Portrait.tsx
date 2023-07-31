import { useContext, useState } from "react"
import { Unit } from "../models"
import { UnitPanel } from "./UnitPanel"
import { UnitContext } from "../App"

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
  const { unit, setUnit } = useContext(UnitContext);

  // TODO : unit Context on hover
  const setUnitContext = (unit: Unit | undefined) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    // unitContext = unit;

    // console.log(unitContext);
  }

  return (
    <div
      onMouseEnter={() => {
        setIsShown(true);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        setUnit(props.unit);
      }}
      onMouseLeave={() => {
        setIsShown(false);
        // setUnitContext(undefined);
      }}>
        <div>
          { isShown && 
            <UnitPanel unit={unit} side={props.side} />
          }
        </div>
    </div>
    
  )
}