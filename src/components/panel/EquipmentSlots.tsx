import { EQUIPMENT_SLOTS } from "../../constants"
import { Icon } from "../global/Icon"

export const EquipmentSlots = () => {
  return (
    <div className='h-full w-1/16 float-left'>
      <div className='h-1/10' />
      { EQUIPMENT_SLOTS.map((icon, index) => 
        <Icon key={index} name={icon} padding={'p-2'} />
      )}
    </div>
  )
}