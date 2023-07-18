import { useState } from "react"
import { Unit } from "../models"
import { Pane } from "./Pane"

type UnitProps = {
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
export const Panel = (props: UnitProps) => {
  const [isShown, setIsShown] = useState(false);
  const unit = props.unit;

  return (
    <div
      className='border-4'
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => setIsShown(false)}>
        <div className=''>
          { isShown && 
            <Pane unit={unit} />
          }
        </div>
    </div>
    
  )
}