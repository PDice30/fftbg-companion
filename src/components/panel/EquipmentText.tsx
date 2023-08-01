import { useContext } from "react"
import { Unit } from "../../models"
import { PanelText } from "../global/PanelText"
import { PanelContext } from "../../contexts/PanelContext"

export const EquipmentText = () => {
  const { unit } = useContext(PanelContext);
  const isMonster = unit.Gender === 'Monster';
  
  return (
    <div className='h-full w-3/16 float-left text-2xl align-middle'>
      <div className='h-1/10' />
      { isMonster ?
        <></>
      :
        <>
          <PanelText text={unit.Mainhand} toolTipType='Item' /> 
          <PanelText text={unit.Offhand} toolTipType='Item' />
          <PanelText text={unit.Head} toolTipType='Item' />
          <PanelText text={unit.Armor} toolTipType='Item' />
          <PanelText text={unit.Accessory} toolTipType='Item' />
        </>
      }
      
    </div>
  )
}