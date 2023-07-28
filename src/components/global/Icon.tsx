import { BASE_IMAGE_URL } from "../../constants";

type IconProps = {
  name: string;
  padding?: string;
}

export const Icon = (iconProps: IconProps) => {
  const padding = iconProps.padding ? iconProps.padding : 'p-1';
  const style = `h-1/6 items-center ${padding}`;

  return (
    <img className={style} src={BASE_IMAGE_URL + iconProps.name + '.png'}></img>
  )
}