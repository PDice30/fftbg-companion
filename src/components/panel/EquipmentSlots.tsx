import { useContext } from "react";
import { Icon } from "../global/Icon";
import { OverlayContext } from '../../contexts/OverlayContext';

export const EquipmentSlots = () => {
  const { unit } = useContext(OverlayContext);

  const useDoublehandIcon = unit.SupportSkill === 'Doublehand';

  return (
    <div className='h-full w-1/16 float-left'>
      <div className='h-1/10' />
      { useDoublehandIcon ?
        <>
          <Icon name='doublehand' padding={'p-doublehand'} type='Base' />
          <Icon name='nothing' padding={'p-2'} type='Base' />
        </>
      :
        <>
          <Icon name='hand' padding={'p-2'} type='Base' />
          <Icon name='hand' padding={'p-2'} type='Base' />
        </>
      }
      <Icon name='head' padding={'p-2'} type='Base' />
      <Icon name='body' padding={'p-2'} type='Base' />
      <Icon name='accessory' padding={'p-2'} type='Base' />
    </div>
  )
}