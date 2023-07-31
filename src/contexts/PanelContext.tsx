import { createContext, useState } from "react";
import { Unit } from "../models";
import defaultUnit from "../data/defaultUnit";
import { ExamineProps } from "../components/panel/Examine";

type PanelContextType = {
  unit: Unit,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setUnit: Function,
  examineObject: ExamineProps,
  // eslint-disable-next-line @typescript-eslint/ban-types
  setExamineObject: Function,
}

export const PanelContext = createContext<PanelContextType>({
  unit: defaultUnit,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUnit: () => {},
  examineObject: {
    name: '', details: ''
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setExamineObject: () => {},
});

export const PanelProvider = (props: React.PropsWithChildren) => {
  const [unit, setUnit] = useState<Unit>(defaultUnit);
  const [examineObject, setExamineObject] = useState({name: '', details: ''});

  return (
    <PanelContext.Provider
      value={{ 
        unit: unit, 
        setUnit: setUnit, 
        examineObject: examineObject,
        setExamineObject: setExamineObject 
      }}
    >
      {props.children}
    </PanelContext.Provider>
  );
};