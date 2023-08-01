import { createContext, useState } from "react";
import { ToolTipType, ToolTips, Unit } from "../models";
import defaultUnit from "../data/defaultUnit";

type PanelContextType = {
  unit: Unit,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setUnit: Function,
  examineText: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setExamineText: Function,
  toolTips: ToolTips,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setToolTips: Function,
  toolTipType: ToolTipType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setToolTipType: Function
}

export const PanelContext = createContext<PanelContextType>({
  unit: defaultUnit,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUnit: () => {},
  examineText: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setExamineText: () => {},
  toolTips: { },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToolTips: () => {},
  toolTipType: 'Ability',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setToolTipType: () => {},
});

export const PanelProvider = (props: React.PropsWithChildren) => {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [examineText, setExamineText] = useState('');
  const [toolTips, setToolTips] = useState<ToolTips>({})
  const [toolTipType, setToolTipType] = useState<ToolTipType>('Ability');

  return (
    <PanelContext.Provider
      value={{ 
        unit: unit, 
        setUnit: setUnit, 
        examineText: examineText,
        setExamineText: setExamineText,
        toolTips: toolTips,
        setToolTips: setToolTips,
        toolTipType: toolTipType,
        setToolTipType: setToolTipType,
      }}
    >
      {props.children}
    </PanelContext.Provider>
  );
};