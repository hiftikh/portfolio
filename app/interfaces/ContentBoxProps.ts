import DataInterance from "@/app/interfaces/Data";

export interface ContentBoxProps {
  data: DataInterance[];
  includeDesc?: boolean;
  type?: string;
}
