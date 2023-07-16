import { useState } from "react"
import { Tournament, Unit } from "../models"

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

  //import baseurl/port etc
  const handleMouseOver = async () => {
    const tournament = await (await fetch('http://localhost:8080/api/hello')).json() as Tournament;
    console.log(tournament);
  }

  return (
    <div
      className='border-4'
      onMouseEnter={() => {
        setIsShown(true);
        void handleMouseOver();
      }}
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