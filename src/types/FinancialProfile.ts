
export type AttitudeRating = 1 | 2 | 3 | 4 | 5;

export interface FinancialAttitude {
  return: AttitudeRating;
  risk: AttitudeRating;
  period: AttitudeRating;
  flexibility: AttitudeRating;
}

export type FinancialGoalType = "退休規劃" | "子女教育" | "資產增值" | "購置房產" | "創業投資" | "其他";

export interface FinancialGoal {
  id: number;
  type: FinancialGoalType;
  description: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  attitudes: FinancialAttitude;
}
