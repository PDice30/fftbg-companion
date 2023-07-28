import { BASE_IMAGE_URL } from "../../constants";

type IconProps = {
  name: string;
  folder: string
}

export const Icon = (iconProps: IconProps) => {
  return (
    <img className='h-1/6 p-1 items-center' src={BASE_IMAGE_URL + iconProps.name + '.png'}></img>
  )
}