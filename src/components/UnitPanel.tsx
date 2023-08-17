// import { useState } from "react"
import { Unit } from "../models"
import { Details } from "./panel/Details"
import { Examine } from "./panel/Examine"
import { EquipmentSlots } from "./panel/EquipmentSlots"
import { EquipmentIcons } from "./panel/EquipmentIcons"
import { EquipmentText } from "./panel/EquipmentText"
import { AbilityIcons } from "./panel/AbilityIcons"
import { AbilityText } from "./panel/AbilityText"

type UnitPanelProps = {
  side: number,
  unit: Unit,
  index: number // If 0, bump down. If 3, bump up.
}

// TODO: All text needs sized based on aspect ratio
// TODO: Multiple borders with different colors

export const UnitPanel = (props: UnitPanelProps) => {
  // TODO: refactor the style

  let className = 'w-pane h-1/4 absolute border-2 border-unit-panel shadow-unit-panel bg-unit-panel inline text-unit-panel bott'; 
  if (props.index === 0) className += ' top-8';
  if (props.index === 3) className += ' bottom-8';

  return (
    <div className={className} style={props.side === 1 ? {left: '9.5%', textShadow: '2px 2px 2px #857C6A' } : {left: '30.5%', textShadow: '2px 2px 2px #857C6A' }}>

      <Details />

      <EquipmentSlots />
        
      <EquipmentIcons />
      
      <EquipmentText />
        
      <AbilityIcons />

      <AbilityText />

      <Examine />
    </div>
  )
}