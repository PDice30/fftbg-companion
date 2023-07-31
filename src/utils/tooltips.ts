import { ToolTips } from "../models";

const getTooltips = async (): Promise<ToolTips> => {

  const response = (await (await fetch('https://fftbg.com/api/tips')).json()) as ToolTips;
  // console.log(response);

  return response;
}

export default getTooltips;

    