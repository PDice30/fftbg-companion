import { useState } from "react"
import { Unit } from "../models"

type UnitProps = {
  key: string,
  unit: Unit,
  side: number
}

export const Panel = (props: UnitProps) => {
  const [isShown, setIsShown] = useState(false);
  const unit = props.unit;

  return (
    <div 
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}>
        <div className=''>
          { unit.Name }
          { isShown && 
            <>
              <span>{unit.Class}</span>
              <span>{unit.Brave}</span>
              <span>{unit.Faith}</span>
              <span>{unit.Sign}</span>
              <span>{unit.Gender}</span>
              {}
            </>
          }
        </div>
    </div>
    
  )
}