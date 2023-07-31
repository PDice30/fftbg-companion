import { createContext, useState } from "react";
import { Unit } from "../models";
import defaultUnit from "../data/defaultUnit";
import { ExamineProps } from "../components/panel/Examine";

type PanelContextType = {
  unit: Unit,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setUnit: Function,
  examineText: string,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setExamineText: Function,
}

export const PanelContext = createContext<PanelContextType>({
  unit: defaultUnit,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUnit: () => {},
  examineText: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setExamineText: () => {},
});

export const PanelProvider = (props: React.PropsWithChildren) => {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [examineText, setExamineText] = useState('');

  return (
    <PanelContext.Provider
      value={{ 
        unit: unit, 
        setUnit: setUnit, 
        examineText: examineText,
        setExamineText: setExamineText 
      }}
    >
      {props.children}
    </PanelContext.Provider>
  );
};