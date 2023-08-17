import { useContext } from "react";
import { Icon } from "../global/Icon";
import { OverlayContext } from '../../contexts/OverlayContext';

export const EquipmentSlots = () => {
  const { unit } = useContext(OverlayContext);

  const useDoublehandIcon = unit.Mainhand?.includes(' Bow') || unit.SupportSkill === 'Doublehand';

  return (
    <div className='h-full w-1/16 float-left'>
      <div className='h-1/10' />
      { useDoublehandIcon ?
        <>
          <Icon name='doublehand' padding={'p-doublehand'} />
          <Icon name='nothing' padding={'p-2'} />
        </>
      :
        <>
          <Icon name='hand' padding={'p-2'} />
          <Icon name='hand' padding={'p-2'} />
        </>
      }
      <Icon name='head' padding={'p-2'} />
      <Icon name='body' padding={'p-2'} />
      <Icon name='accessory' padding={'p-2'} />
    </div>
  )
}