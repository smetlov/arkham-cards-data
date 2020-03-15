/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Schema = AllCampaigns | Log;
export type Step = BranchStep | InputStep | EncounterSetsStep | GenericStep | RuleReminderStep | StoryStep;
export type Condition =
  | CampaignLogCondition
  | Math
  | CardCondition
  | CampaignDataCondition
  | CampaignDataScenarioCondition
  | CampaignDataChaosBagCondition
  | ScenarioDataCondition
  | TraumaCondition;
export type InvestigatorSelector =
  | "lead_investigator"
  | "all"
  | "any"
  | "choice"
  | "defeated"
  | "not_resigned"
  | "input_value";
export type Operand = CampaignLogOperand | ChaosBagOperand;
export type ChaosToken =
  | "+1"
  | "0"
  | "-1"
  | "-2"
  | "-3"
  | "-4"
  | "-5"
  | "-6"
  | "-7"
  | "-8"
  | "skull"
  | "cultist"
  | "tablet"
  | "elder_thing"
  | "elder_sign"
  | "auto_fail";
export type Option = EffectOption | StepsOption | ResolutionOption;
export type Effect =
  | EarnXpEffect
  | AddCardEffect
  | RemoveCardEffect
  | ReplaceCardEffect
  | TraumaEffect
  | CampaignLogEffect
  | CampaignDataResultEffect
  | CampaignDataDifficultyEffect
  | CampaignDataNextScenarioEffect
  | CampaignDataChooseInvestigatorsEffect
  | AddRemoveChaosTokenEffect;
export type Input =
  | CardChoiceInput
  | SuppliesInput
  | UseSuppliesInput
  | InvestigatorChoiceInput
  | ChooseInput
  | CounterInput
  | InvestigatorCounterInput;
export type Choice = StepsChoice | EffectsChoice | ResolutionChoice;
export type AllCampaigns = FullCampaign[];
export type Choice1 =
  | CardChoice
  | SuppliesChoice
  | SelectChoice
  | InvestigatorCounterChoice
  | CounterChoice
  | InvestigatorChoice;

export interface FullCampaign {
  campaign: Campaign;
  scenarios: Scenario[];
}
export interface Campaign {
  id: string;
  name: string;
  position: number;
  campaign_log: {
    id: string;
    title: string;
  }[];
  scenarios: string[];
  setup: string[];
  steps: Step[];
}
export interface BranchStep {
  id: string;
  type: "branch";
  text?: string;
  condition: Condition;
  options: Option[];
}
export interface CampaignLogCondition {
  type: "campaign_log";
  section: string;
  id?: string;
  investigator?: InvestigatorSelector;
}
export interface Math {
  type: "math";
  opA: Operand;
  opB: Operand;
  operation: "compare" | "sum";
}
export interface CampaignLogOperand {
  type: "campaign_log";
  section: string;
  id?: string;
}
export interface ChaosBagOperand {
  type: "chaos_bag";
  token: ChaosToken;
}
export interface CardCondition {
  type: "has_card";
  investigator?: InvestigatorSelector;
  card: string;
}
export interface CampaignDataCondition {
  type: "campaign_data";
  campaign_data: "difficulty";
  scenario?: string;
}
export interface CampaignDataScenarioCondition {
  type: "campaign_data";
  campaign_data: "scenario_completed";
  scenario: string;
}
export interface CampaignDataChaosBagCondition {
  type: "campaign_data";
  campaign_data: "chaos_bag";
  token: ChaosToken;
}
export interface ScenarioDataCondition {
  type: "scenario_data";
  scenario_data: "player_count" | "investigator" | "any_resigned" | "resolution";
}
export interface TraumaCondition {
  type: "trauma";
  investigator: InvestigatorSelector;
  trauma: "killed";
}
export interface EffectOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  effects: Effect[];
  steps?: null;
  resolution?: null;
}
export interface EarnXpEffect {
  type: "earn_xp";
  investigator: InvestigatorSelector;
  bonus?: number;
}
export interface AddCardEffect {
  type: "add_card";
  investigator: InvestigatorSelector;
  card: string;
  weakness_traits?: string[];
  ignore_deck_limit?: boolean;
}
export interface RemoveCardEffect {
  type: "remove_card";
  investigator?: InvestigatorSelector;
  card?: string;
}
export interface ReplaceCardEffect {
  type: "replace_card";
  old_card: string;
  new_card: string;
}
export interface TraumaEffect {
  type: "trauma";
  investigator?: InvestigatorSelector;
  mental?: number;
  physical?: number;
  mental_or_physical?: number;
  killed?: boolean;
  insane?: boolean;
}
export interface CampaignLogEffect {
  type: "campaign_log";
  section: string;
  id?: string;
  count?: number;
  card?: string;
  text?: string;
  cross_out?: boolean;
}
export interface CampaignDataResultEffect {
  type: "campaign_data";
  setting: "result";
  value: "win" | "lose";
}
export interface CampaignDataDifficultyEffect {
  type: "campaign_data";
  setting: "difficulty";
  value: "easy" | "standard" | "hard" | "expert";
}
export interface CampaignDataNextScenarioEffect {
  type: "campaign_data";
  setting: "next_scenario";
  scenario: string;
}
export interface CampaignDataChooseInvestigatorsEffect {
  type: "campaign_data";
  setting: "choose_investigators";
}
export interface AddRemoveChaosTokenEffect {
  type: "add_chaos_token" | "remove_chaos_token";
  tokens: ChaosToken[];
}
export interface StepsOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  steps: string[];
  effects?: null;
  resolution?: null;
}
export interface ResolutionOption {
  boolCondition?: boolean;
  numCondition?: number;
  condition?: string;
  default?: boolean;
  resolution: string;
  effects?: null;
  steps?: null;
}
export interface InputStep {
  id: string;
  type: "input";
  text?: string;
  subtext?: string;
  input: Input;
}
export interface CardChoiceInput {
  type: "card_choice";
  query: CardQuery[];
  choices: Choice[];
}
export interface CardQuery {
  trait?: string;
  unique?: boolean;
  vengeance?: boolean;
  code?: string[];
}
export interface StepsChoice {
  text: string;
  description?: string;
  steps: string[];
  effects?: null;
  resolution?: null;
}
export interface EffectsChoice {
  text: string;
  description?: string;
  effects: Effect[];
  steps?: null;
  resolution?: null;
}
export interface ResolutionChoice {
  text: string;
  description?: string;
  resolution: string;
  steps?: null;
  effects?: null;
}
export interface SuppliesInput {
  type: "supplies";
  points: number[];
  supplies: {
    id: string;
    name: string;
    description: string;
    cost: number;
    multiple?: boolean;
  }[];
}
export interface UseSuppliesInput {
  type: "use_supplies";
  supply: string;
  investigator: InvestigatorSelector;
  choices: Option[];
}
export interface InvestigatorChoiceInput {
  type: "investigator_choice";
  investigator: InvestigatorSelector;
  choices: Choice[];
}
export interface ChooseInput {
  type: "choose_one" | "choose_many";
  choices: Choice[];
}
export interface CounterInput {
  type: "counter";
  text: string;
  effects: Effect[];
}
export interface InvestigatorCounterInput {
  type: "investigator_counter";
  text: string;
  effects: Effect[];
}
export interface EncounterSetsStep {
  id: string;
  type: "encounter_sets";
  text?: string;
  subtext?: string;
  encounter_sets: string[];
}
export interface GenericStep {
  id: string;
  type?: null;
  text?: string;
  steps?: string[];
  effects?: Effect[];
  bullets?: {
    text: string;
  }[];
}
export interface RuleReminderStep {
  id: string;
  type: "rule_reminder";
  text: string;
  title?: string;
}
export interface StoryStep {
  id: string;
  type: "story";
  text: string;
  effects?: Effect[];
  bullets?: {
    text: string;
  }[];
}
export interface Scenario {
  id: string;
  scenarioName: string;
  setup: string[];
  resolutions?: Resolution[];
  steps: Step[];
  interlude?: boolean;
}
export interface Resolution {
  id: string;
  title: string;
  text?: string;
  resolution?: string;
  steps?: string[];
}
export interface Log {
  campaignName: string;
  campaignCode: string;
  log: LogEntry[];
}
export interface LogEntry {
  id: string;
  choice?: Choice1;
}
export interface CardChoice {
  cards: string[];
}
export interface SuppliesChoice {
  supplies: {
    investigator: string;
    supplies: string[];
  }[];
}
export interface SelectChoice {
  choices: string[];
}
export interface InvestigatorCounterChoice {
  counts: {
    investigator: string;
    count?: number;
  }[];
}
export interface CounterChoice {
  count: number;
}
export interface InvestigatorChoice {
  investigators?: {
    investigator: string;
    deck?: string;
  }[];
}
