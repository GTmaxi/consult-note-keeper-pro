
import React, { useState } from 'react';
import { FinancialGoal, FinancialAttitude } from '@/types/FinancialProfile';
import FinancialGoalCard from './FinancialGoalCard';
import FinancialAttitudeChart from './FinancialAttitudeChart';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface FinancialGoalsListProps {
  goals: FinancialGoal[];
}

const FinancialGoalsList: React.FC<FinancialGoalsListProps> = ({ goals }) => {
  const [selectedGoal, setSelectedGoal] = useState<FinancialGoal | null>(null);

  const handleGoalClick = (goal: FinancialGoal) => {
    setSelectedGoal(goal);
  };

  const handleDialogClose = () => {
    setSelectedGoal(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {goals.map((goal) => (
          <FinancialGoalCard 
            key={goal.id} 
            goal={goal} 
            onClick={() => handleGoalClick(goal)}
          />
        ))}
      </div>

      <Dialog open={selectedGoal !== null} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-md">
          {selectedGoal && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedGoal.description}</DialogTitle>
                <DialogDescription>
                  {selectedGoal.type} - 目標金額: NT$ {selectedGoal.targetAmount.toLocaleString()}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <FinancialAttitudeChart attitudes={selectedGoal.attitudes} />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FinancialGoalsList;
