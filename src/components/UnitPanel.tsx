import { EQUIPMENT_ICONS, PLACEHOLDER_ITEM_ICONS } from "../constants"
import { Unit } from "../models"
import { Icon } from "./Icon"

type UnitPanelProps = {
  side: number,
  unit: Unit
}

export const UnitPanel = (props: UnitPanelProps) => {
  return (
    <div className='w-pane h-1/4 absolute border-2 border-black bg-unit-panel' style={props.side === 1 ? {left: '9.5%'} : {left: '30.5%'}}>
      { /* TODO: Below div will be long panel of other stats,info */ }
        <div className='h-1/6 w-1/8 relative px-2'>{props.unit.Name}</div> 
        { EQUIPMENT_ICONS.map(icon => 
          <Icon name={icon} folder='static' />
        )}
        { PLACEHOLDER_ITEM_ICONS.map(icon => 
          <Icon name={icon} folder='items' />
        )}
    </div>
  )
}