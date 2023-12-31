import { useContext } from "react"
import { BASE_IMAGE_URL, EQUIPMENT_ICONS } from "../../constants"
import { Unit } from "../../models"
import { Icon } from "../global/Icon"
import { OverlayContext } from "../../contexts/OverlayContext"

export const EquipmentIcons = () => {
  const { unit } = useContext(OverlayContext);
  const isMonster = unit.Gender === 'Monster';

  return (
    <div className='h-full w-1/16 float-left bg-dark-unit-panel'>
      <div className='h-1/10 pt-px relative'>
        <img className='absolute max-w-none' style={{width: '100%', top: '-0.5rem'}} src={BASE_IMAGE_URL + 'eqp.png'}/>
      </div>
      { isMonster ? 
        <>
        </>
      :
        EQUIPMENT_ICONS.map((icon, index) => {
          const equipmentName = unit[icon as keyof Unit] as string;
          if (equipmentName) {
            return(
              <Icon key={index} name={equipmentName} type='Item' />
            )
          }
          return(
            <Icon key={index} name={'blank'} type='Base'/>
          )
          
        })
      }
  </div>
  )
}