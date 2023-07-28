import { Unit } from "../../models"
import { PanelText } from "../global/PanelText"

type UnitProps = {
  unit: Unit
}

export const EquipmentText = (props: UnitProps) => {
  const isMonster = props.unit.Gender === 'Monster';
  
  return (
    <div className='h-full w-3/16 float-left text-2xl align-middle'>
      <div className='h-1/10' />
      { isMonster ?
        <></>
      :
        <>
          <PanelText text={props.unit.Mainhand} /> 
          <PanelText text={props.unit.Offhand} />
          <PanelText text={props.unit.Head} />
          <PanelText text={props.unit.Armor} />
          <PanelText text={props.unit.Accessory} />
        </>
      }
      
    </div>
  )
}