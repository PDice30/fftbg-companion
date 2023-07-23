// import { LOCAL_ICON_URL } from "../constants";

type PanelTextProps = {
  text?: string;
}

export const PanelText = (props: PanelTextProps) => {
  return (
    <div className='h-1/6 py-1'>
      {props.text}
    </div>
  )
}