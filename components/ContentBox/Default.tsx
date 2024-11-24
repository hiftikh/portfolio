import React from "react";
import DataInterance from "../../app/interfaces/Data";
import ContentCard from "../ContentCard/Default";

interface CardProps {
  data: DataInterance[];
  includeDesc?: boolean;
}

export default function ContentBox(props: CardProps) {
  return (
    <div className=" my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      <ContentCard {...props} />
    </div>
  );
}
