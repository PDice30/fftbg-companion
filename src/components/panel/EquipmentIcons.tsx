import { useContext } from "react"
import { BASE_IMAGE_URL, EQUIPMENT_ICONS } from "../../constants"
import { Unit } from "../../models"
import { Icon } from "../global/Icon"
import { UnitContext } from "../../App"


export const EquipmentIcons = () => {
  const unit = useContext(UnitContext).unit;
  const isMonster = unit.Gender === 'Monster';

  console.log(unit);

  return (
    <>
      { unit &&
        <div className='h-full w-1/16 float-left bg-dark-unit-panel'>
          <div className='h-1/10 pt-px'>
            <img src={BASE_IMAGE_URL + 'eqp.png'}/>
          </div>
          { isMonster ? 
            <>
            </>
          :
            EQUIPMENT_ICONS.map((icon, index) => {
              console.log(icon);
              const equipmentName = unit[icon as keyof Unit] as string;
              if (equipmentName) {
                return(
                  <Icon key={index} name={equipmentName} item={true}/>
                )
              }
              return(
                <Icon key={index} name={'blank'} item={false}/>
              )
              
            })
          }
        </div>
      }
    </>
  )
}