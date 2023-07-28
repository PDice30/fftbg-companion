import { BASE_IMAGE_URL, BASE_ITEMS_URL } from "../../constants";

type IconProps = {
  name: string;
  padding?: string;
  item?: boolean;
}

export const Icon = (iconProps: IconProps) => {
  const padding = iconProps.padding ? iconProps.padding : 'p-1';
  const style = `h-1/6 items-center ${padding}`;

  return (
    <img className={style} src={(iconProps.item ? BASE_ITEMS_URL : BASE_IMAGE_URL) + iconProps.name + '.png'}></img>
  )
}