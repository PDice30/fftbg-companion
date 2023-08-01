import { ToolTips } from "../models";

const getTooltips = async (): Promise<ToolTips> => {

  const response = (await (await fetch('https://fftbg.com/api/tips')).json()) as ToolTips;

  // TODO: Exact map type probably isn't necessary
  if (!response.Ability || !response.Class || !response.Item || !response.MonsterSkills || !response.UserSkill || !response.Zodiac) return {}; 
  const Ability = new Map(Object.entries(response.Ability))
  const Class = new Map(Object.entries(response.Class))
  const Item = new Map(Object.entries(response.Item))
  const MonsterSkills = new Map(Object.entries(response.MonsterSkills))
  const UserSkill = new Map(Object.entries(response.UserSkill))
  const Zodiac = new Map(Object.entries(response.Zodiac))

  const toolTips: ToolTips = {
    Ability, Class, Item, MonsterSkills, UserSkill, Zodiac
  }

  return toolTips;
}

export default getTooltips;

    