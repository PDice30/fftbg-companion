import { useContext } from "react"
import { ABILITY_ICONS, BASE_IMAGE_URL } from "../../constants"
import { Icon } from "../global/Icon"
import { PanelContext } from "../../contexts/PanelContext"

export const AbilityIcons = () => {
  const { unit, toolTips } = useContext(PanelContext);
  
  // TODO: cleanup undefined type logic
  const isMonster = unit.Gender === 'Monster';
  let monsterAbilities: string[] | undefined = [];

  if (isMonster && toolTips.MonsterSkills) {
    monsterAbilities = toolTips.MonsterSkills?.get(unit.Class);
    if (monsterAbilities && monsterAbilities.length > 5) {
      monsterAbilities = monsterAbilities?.slice(0, 5);
    }
  }

  return (
    <div className='h-full w-1/16 float-left bg-dark-unit-panel'>
      <div className='h-1/10 pt-px'>
        <img src={BASE_IMAGE_URL + 'ability.png'} className='absolute'/>
      </div>

      { 
      (isMonster && monsterAbilities?.length) ? 
        monsterAbilities.map((_, index) => {
          return (
            <Icon key={index} name='monster-ability' />
          )
        })
      :
        ABILITY_ICONS.map((icon, index) => {
          return (
            <Icon key={index} name={icon} />
          )
        })
      }
    </div>
  )
}