import { ABILITY_ICONS, BASE_IMAGE_URL, BASE_ITEMS_URL } from "../../constants"
import { Unit } from "../../models"
import { Icon } from "../global/Icon"

type UnitProps = {
  unit: Unit
}

export const AbilityIcons = (props: UnitProps) => {
  const isMonster = props.unit.Gender === 'Monster';

  return (
    <div className='h-full w-1/16 float-left bg-dark-unit-panel'>
      <div className='h-1/10 pt-px'>
        <img src={BASE_IMAGE_URL + 'ability.png'} className='absolute'/>
      </div>

      {/* TODO: Will need to lookup a data dump for monster abilities by their 'class' */}

      { isMonster ? 
        <>
          <Icon name={'monster-ability'} />
          <Icon name={'monster-ability'} />
          <Icon name={'monster-ability'} />
        </>

      :
        ABILITY_ICONS.map((icon, index) => 
          <Icon key={index} name={icon} />
        )
      }
    </div>
  )
}