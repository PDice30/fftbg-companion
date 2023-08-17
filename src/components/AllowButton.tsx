import { BASE_MUSTADIO_URL } from "../constants";
import { OverlayContext } from "../contexts/OverlayContext";
import { useContext } from "react";

export const AllowButton = () => {
  const { setAllowOverlay } = useContext(OverlayContext);

  return (
    <button
      className='absolute inset-y-0 right-6 text-3xl w-12 h-12 bg-unit-panel border-unit-panel border-2 shadow-unit-panel'
      style={{ top: '60%'}}
      onClick={() => {
        console.log('clicked me');
        setAllowOverlay(true);
      }}>
        <img className='p-1' src={BASE_MUSTADIO_URL + 'icons/support.png'} />
    </button>
  )
}