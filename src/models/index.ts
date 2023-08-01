export type TournamentData = {
  teamOne: Team,
  teamTwo: Team,
}

export type Tournament = {
  Type: string,
  ID: number,
  LastMod: string,
  Teams: Teams,
  Maps: string[],
  Winners: string[],
  Pots: string[] | null, //?
  SkillDrop: string,
  Entrants: string[],
  Snubs: string[],
}

export type Teams = {
  // Has a team color as a key to an object of types below 
  black: Team,
  blue: Team,
  brown: Team,
  champion: Team,
  green: Team
  purple: Team,
  red: Team,
  white: Team,
  yellow: Team
}

export type Team = {
  Player: string,
  Name: string,
  Palettes: string,
  Units: Unit[]
}

export type Unit = {
  Name: string,
  Gender: string,
  Sign: string,
  Brave: number,
  Faith: number,
  Class: string,
  ActionSkill: string,
  ReactionSkill: string,
  SupportSkill: string,
  MoveSkill: string,
  Mainhand: string,
  Offhand: string,
  Head: string,
  Armor: string,
  Accessory: string,
  ClassSkills: string[],
  ExtraSkills: string[],
  RaidBoss: boolean
}

export type TeamName = 'red' | 'blue' | 'green' | 'yellow' | 'white' | 'black' | 'purple' | 'brown' | 'champion'; 

export type ToolTips = {
  Item?: Map<string, string>,
  Ability?: Map<string, string>,
  UserSkill?: Map<string, string>,
  Zodiac?: Map<string, string>,
  Class?: Map<string, string>,
  MonsterSkills?: Map<string, string[]>
}

export type ExamineDetails = {
  name: string,
  type: ToolTipType,
  // component?: any;
}

export type ToolTipType = 'Ability' | 'Class' | 'Item' | 'MonsterSkills' | 'UserSkill' | 'Zodiac' | 'ClassSkills' | 'ExtraSkills'
