import { Unit } from "../../models"

type UnitProps = {
  unit: Unit
}

export const Details = (props: UnitProps) => {
  return (
    <>
      <div className='h-1/6 text-3xl'>{props.unit.Name}</div>
      <div className='h-1/6'>{props.unit.Gender}</div>
      <div className='h-1/6'>Brave: {props.unit.Brave}</div>
      <div className='h-1/6'>Faith: {props.unit.Faith}</div>
      <div className='h-1/6'>{props.unit.Class}</div>
      <div className='h-1/6'>{props.unit.Sign}</div>
    </>
  )
}