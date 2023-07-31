import React from "react";
import { Unit } from "../models";

type UnitContextType = {
  unit: Unit,
  setUnit: React.Dispatch<React.SetStateAction<Unit>>
}

export default UnitContextType;