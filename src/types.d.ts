export interface Activity {
  id: string;
  name: string;
  amount: number;
  isExpense: boolean;
  userId: string;
  createdAt: Date;
}
