import { createContext } from "react";
import { Unit } from "../models";

// TODO: find proper typing for this, or set a default context
export const UnitContext = createContext<Unit | undefined>(undefined);