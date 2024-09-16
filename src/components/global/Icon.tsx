import { useContext } from "react";
import { BASE_IMAGE_URL, BASE_ITEMS_URL, BASE_ZODIAC_URL } from "../../constants";
import { OverlayContext } from "../../contexts/OverlayContext";

type IconType = 'Base' | 'Item' | 'Zodiac';

type IconProps = {
  name: string;
  type: IconType;
  padding?: string;
  style?: string;
  flip?: boolean;
}

export const Icon = (iconProps: IconProps) => {
  const { setExamineText, setToolTipType } = useContext(OverlayContext);
  const padding = iconProps.padding ? iconProps.padding : 'p-1';
  let style = iconProps.style ? iconProps.style : `h-1/6 items-center mx-auto ${padding}`;

  if (iconProps.flip) style += ' scale-x-[-1]';

  let url;

  switch (iconProps.type) {
    case 'Base':
      url = BASE_IMAGE_URL;
      break;
    case 'Item':
      url = BASE_ITEMS_URL;
      break;
    case 'Zodiac':
      url = BASE_ZODIAC_URL;
      break;
    default:
      url = BASE_IMAGE_URL;
      break;
  }

  const handleClick = () => {
    if (iconProps.type === 'Item') {
      setExamineText(iconProps.name);
      setToolTipType('Item');
    }
  }

  return (
    <img onClick={() => handleClick()} className={style} src={url + iconProps.name + '.png'}></img>
  )
}