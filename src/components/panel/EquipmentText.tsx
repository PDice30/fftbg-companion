import { useContext } from "react"
import { PanelText } from "../global/PanelText"
import { OverlayContext } from "../../contexts/OverlayContext"

export const EquipmentText = () => {
  const { unit, textSize } = useContext(OverlayContext);
  const isMonster = unit.Gender === 'Monster';
  
  return (
    <div className={'h-full w-3/16 float-left align-middle ' + textSize}>
      <div className='h-1/10' />
      { isMonster ?
        <></>
      :
        <>
          <PanelText text={unit.Mainhand} toolTipType='Item' canBeNotable={true} isItem={true} /> 
          <PanelText text={unit.Offhand} toolTipType='Item' canBeNotable={true} isItem={true} />
          <PanelText text={unit.Head} toolTipType='Item' canBeNotable={true} isItem={true} />
          <PanelText text={unit.Armor} toolTipType='Item' canBeNotable={true} isItem={true} />
          <PanelText text={unit.Accessory} toolTipType='Item' canBeNotable={true} isItem={true} />
        </>
      }
      
    </div>
  )
}