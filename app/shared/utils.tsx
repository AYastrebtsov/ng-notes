import { twMerge as twMergeOriginal } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export function cn(...args: ClassValue[]) {
  return twMergeOriginal(clsx(args));
}
