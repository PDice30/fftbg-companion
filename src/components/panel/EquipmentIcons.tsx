import { BASE_IMAGE_URL, EQUIPMENT_ICONS } from "../../constants"
import { Unit } from "../../models"
import { Icon } from "../global/Icon"

type UnitProps = {
  unit: Unit
}

export const EquipmentIcons = (props: UnitProps) => {
  const isMonster = props.unit.Gender === 'Monster';

  return (
    <div className='h-full w-1/16 float-left bg-dark-unit-panel'>
      <div className='h-1/10 pt-px'>
        <img src={BASE_IMAGE_URL + 'eqp.png'}/>
      </div>
      { isMonster ? 
        <>
        </>
      :
        EQUIPMENT_ICONS.map((icon, index) => 
          <Icon key={index} name={icon} />
        )
      }
  </div>
  )
}