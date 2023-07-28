// import { LOCAL_ICON_URL } from "../constants";

type PanelTextProps = {
  text?: string;
}

export const PanelText = (props: PanelTextProps) => {
  return (
    <div className='h-1/6 py-1 px-2'>
      {props.text}
    </div>
  )
}