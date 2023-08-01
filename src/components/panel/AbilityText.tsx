import { ABILITY_MAP } from "../../constants"
import { Unit } from "../../models"
import { PanelText } from "../global/PanelText"

type UnitProps = {
  unit: Unit
}

export const AbilityText = (props: UnitProps) => {
  // const isMonster = props.unit.Gender === 'Monster';
  
  return (
    <div className='h-full w-3/16 float-left text-2xl align-middle'>
      <div className='h-1/10' />
      <PanelText text={ABILITY_MAP.get(props.unit.Class)} toolTipType='ClassSkills' /> 
      <PanelText text={props.unit.ActionSkill} toolTipType='ExtraSkills' />
      <PanelText text={props.unit.ReactionSkill} toolTipType='Ability' />
      <PanelText text={props.unit.SupportSkill} toolTipType='Ability' />
      <PanelText text={props.unit.MoveSkill} toolTipType='Ability' />
    </div>
  )
}