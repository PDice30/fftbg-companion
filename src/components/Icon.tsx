import { LOCAL_ICON_URL } from "../constants";

type IconProps = {
  name: string;
  folder: string
}

export const Icon = (iconProps: IconProps) => {
  return (
    <img className='h-1/6 w-1/8 relative p-2' src={LOCAL_ICON_URL + iconProps.folder + '/' + iconProps.name + '.png'}></img>
  )
}