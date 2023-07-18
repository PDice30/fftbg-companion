import { Unit } from "../models"

type UnitProps = {
  unit: Unit
}

export const Pane = (unitProps: UnitProps) => {
  return (
    <div>
      {unitProps.unit.Name}
    </div>
  )
}