import { useState } from "react"
import { EQUIPMENT_ICONS, PLACEHOLDER_ITEM_ICONS, ABILITY_ICONS, ABILITY_MAP } from "../constants"
import { Unit } from "../models"
import { Details } from "./Details"
import { Examine } from "./Examine"
import { Icon } from "./Icon"
import { PanelText } from "./PanelText"

type UnitPanelProps = {
  side: number,
  unit: Unit
}

export const UnitPanel = (props: UnitPanelProps) => {
  const [examine, setExamine] = useState<any>();

  return (
    <div className='w-pane h-1/4 absolute border-2 border-black bg-unit-panel inline' style={props.side === 1 ? {left: '9.5%'} : {left: '30.5%'}}>
      { /* TODO: Below div will be long panel of other stats,info */ }

      { /** 
       * Details
       * */ 
      }
        <div className='h-full w-3/16 float-left text-2xl px-2'>
          <Details unit={props.unit}/>
        </div>

      { /** 
       * Static Equipment Icons
       * */ 
      }
        <div className='h-full w-1/16 float-left'>
          { EQUIPMENT_ICONS.map(icon => 
            <Icon name={icon} folder='static'/>
          )}
        </div>
      { /** 
       * Item Icons
       * */ 
      }
        <div className='h-full w-1/16 float-left'>
          { PLACEHOLDER_ITEM_ICONS.map(icon => 
            <Icon name={icon} folder='items' />
          )}
        </div>

      { /** 
       * Item Names
       * TODO: Convert to children
       * */ 
      }
        <div className='h-full w-3/16 float-left text-2xl align-middle'>
          <PanelText text={props.unit.Mainhand} /> 
          <PanelText text={props.unit.Offhand} />
          <PanelText text={props.unit.Head} />
          <PanelText text={props.unit.Armor} />
          <PanelText text={props.unit.Accessory} />
        </div>

      { /** 
       * Ability Icons
       * */ 
      }
        <div className='h-full w-1/16 float-left'>
          { ABILITY_ICONS.map(icon => 
            <Icon name={icon} folder='static' />
          )}
        </div>

      { /** 
       * Ability Names
       * TODO: Will need to map the actual class to their primary skill name
       * */ 
      }
        <div className='h-full w-3/16 float-left text-2xl align-middle'>
          <PanelText text={ABILITY_MAP.get(props.unit.Class)} /> 
          <PanelText text={props.unit.ActionSkill} />
          <PanelText text={props.unit.ReactionSkill} />
          <PanelText text={props.unit.SupportSkill} />
          <PanelText text={props.unit.MoveSkill} />
        </div>

      { /** 
       * Examine Pane
       * */ 
      }
        <div className='h-full w-4/16 float-left text-2xl align-middle'>
          <Examine />
        </div>


    </div>
  )
}