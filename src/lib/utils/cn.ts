import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind sınıflarını koşullu olarak birleştirir ve çakışanları çözer.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
