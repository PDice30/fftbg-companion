import { useContext } from "react";
import { BASE_IMAGE_URL, BASE_ITEMS_URL } from "../../constants";
import { OverlayContext } from "../../contexts/OverlayContext";

type IconProps = {
  name: string;
  padding?: string;
  item?: boolean;
}

export const Icon = (iconProps: IconProps) => {
  const { setExamineText, setToolTipType } = useContext(OverlayContext);
  const padding = iconProps.padding ? iconProps.padding : 'p-1';
  const style = `h-1/6 items-center mx-auto ${padding}`;

  const handleClick = () => {
    if (iconProps.item) {
      setExamineText(iconProps.name);
      setToolTipType('Item');
    }
  }

  return (
    <img onClick={() => handleClick()} className={style} src={(iconProps.item ? BASE_ITEMS_URL : BASE_IMAGE_URL) + iconProps.name + '.png'}></img>
  )
}