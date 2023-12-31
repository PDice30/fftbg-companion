import { useContext } from "react"
import { OverlayContext } from "../contexts/OverlayContext"
import { Icon } from "./global/Icon";
import { compareZodiac } from "../utils/compareZodiac";

type ZodiacProps = {
  unitIndex: number,
}

/**
 * Panel probably won't display any data, it will just be for the mouseover for the pane to display
 *  
 * @param props 
 * @returns 
 */
export const Zodiac = (props: ZodiacProps) => {
  const { currentUnits } = useContext(OverlayContext);

  if (!currentUnits) return (<></>);

  const teamOne = currentUnits.slice(0, 4);
  const teamTwo = currentUnits.slice(4, 8);

  const thisUnit = currentUnits[props.unitIndex];
  const side = props.unitIndex <= 3 ? 0 : 1; 

  return (
    <>
      <div className='h-full w-1/4 float-left'>
        {/* Left-sided Icons */}
        <Icon style='mb-2' name={'nothing'} type='Base' />
        {
          teamOne && teamOne.map((unit, index) => {
            let style = index === teamOne.length - 1 ? '' : 'mb-1';
            style += side === 0 ? ' w-full' : ' ml-2 w-full';
            return (
              <Icon style={style} key={index} name={`${compareZodiac(thisUnit.Sign, thisUnit.Gender, unit.Sign, unit.Gender)}star`} type='Zodiac' />
            );
          })
        } 
      </div>
      <div className='h-full w-1/4 float-right'>
        {/* Right-sided Icons */}
        <Icon style='mb-2' name={'nothing'} type='Base' />
        {
          teamTwo && teamTwo.map((unit, index) => {
            let style = index === teamOne.length - 1 ? '' : 'mb-1';
            style += side === 0 ? ' -ml-2 w-full' : ' w-full';
            return (
              <Icon style={style} key={index} name={`${compareZodiac(thisUnit.Sign, thisUnit.Gender, unit.Sign, unit.Gender)}star`} type='Zodiac' />
            );
          })
        } 
      </div>
    </>
    
  )
  
}