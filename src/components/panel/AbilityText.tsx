import { useContext } from "react"
import { ABILITY_MAP } from "../../constants"
import { PanelText } from "../global/PanelText"
import { PanelContext } from "../../contexts/PanelContext"

export const AbilityText = () => {
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
    <div className='h-full w-3/16 float-left text-2xl align-middle'>
      <div className='h-1/10' />

      { 
      (isMonster && monsterAbilities?.length) ? 
        monsterAbilities.map((ability, index) => {
          return (
            <PanelText key={index} text={ability} toolTipType='Ability' />
          )
        })
      :
        <>
          <PanelText text={ABILITY_MAP.get(unit.Class)} toolTipType='ClassSkills' /> 
          <PanelText text={unit.ActionSkill} toolTipType='ExtraSkills' />
          <PanelText text={unit.ReactionSkill} toolTipType='Ability' canBeNotable={true} />
          <PanelText text={unit.SupportSkill} toolTipType='Ability' canBeNotable={true} />
          <PanelText text={unit.MoveSkill} toolTipType='Ability' canBeNotable={true} />
        </>
      }
    </div>
  )
}