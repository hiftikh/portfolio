import DataInterance from "@/app/interfaces/Data";

export interface CardProps {
  data: DataInterance[];
  includeDesc?: boolean;
  type?: string;
}
