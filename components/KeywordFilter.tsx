"use client";

import { Badge } from "@/components/ui/badge";
import {
  orderByAlphabetically,
  removeDuplicates,
  joinClassNames,
} from "@/lib/utils";
import { useState } from "react";

export default function KeywordFilter({ data }: any) {
  let join: any = [];
  data.map((item: any) => join.push(...item.keywords));
  const keywords = removeDuplicates(join);

  const [filter, setFilter] = useState([{}]);

  const handleClick = (name: any[] = []) => {
    setFilter([...filter, name]);
    console.log(filter, name);
  };
  return (
    <>
      <div className="text-center">
        <ul className="flex justify-center flex-wrap gap-5">
          {keywords
            .sort(orderByAlphabetically)
            .map((item: any, index: number) => (
              <li key={index}>
                <input
                  type="checkbox"
                  id={item}
                  name="keyword"
                  value={item}
                  className="hidden peer"
                  required
                  onClick={() => handleClick(item)}
                />
                <label
                  htmlFor={item}
                  className="px-4 py-2 text-sm text-white bg-transparent rounded-full cursor-pointer peer-checked:bg-white peer-checked:text-primary hover:bg-white hover:text-primary"
                >
                  {item}
                </label>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
