import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function joinClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const displayMonthYear = (date: string) => {
  const dateISO = new Date(date);
  return `${month[dateISO.getMonth()].slice(0, 3)} ${dateISO.getFullYear()}`;
};

export const displayYear = (date: string) => {
  const dateISO = new Date(date);
  return `${dateISO.getFullYear()}`;
};

export function orderByRecent(a: any, b: any) {
  return new Date(a.dateAdded) < new Date(b.dateAdded)
    ? 1
    : new Date(a.dateAdded) > new Date(b.dateAdded)
    ? -1
    : 0;
}

export function orderByAlphabetically(a: any, b: any) {
  return a > b ? 1 : a < b ? -1 : 0;
}

export function removeDuplicates(data: any) {
  return [...new Set(data)];
}
