import { useContext, useState } from "react"
import { Unit } from "../models"
import { OverlayContext } from "../contexts/OverlayContext"
import { BASE_ZODIAC_URL } from "../constants";
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

  return (
    <>
      {/* <div className='grid grid-cols-1 float-left h-full w-1/4 border-2'> */}
      <div className='h-full w-1/4 float-left'>
        {
          teamOne && teamOne.map((unit, index) => {
            return (
              // <div className='h-1/4 w-1/4'>
                <Icon style='h-1/4' key={index} name={`${compareZodiac(thisUnit.Sign, thisUnit.Gender, unit.Sign, unit.Gender)}star`} type='Zodiac' />
              // </div>
              // <Image url='BASE_ZODIAC_URL' ></Image>
            );
          })
        } 
      </div>
      <div className='h-full w-1/4 float-right'>
      {/* <div className='grid grid-cols-1 float-right h-full w-1/4 border-2'> */}
        {
          teamTwo && teamTwo.map((unit, index) => {
            return (
              // <div className='h-1/4 w-1/4'>
                <Icon style='h-1/4' key={index} name={`${compareZodiac(thisUnit.Sign, thisUnit.Gender, unit.Sign, unit.Gender)}star`} type='Zodiac' />
              // </div>
            );
          })
        } 
      </div>
    </>
    
  )
  
}