"use client";

import { personnelService } from "@/services/personnel.service";
import { useAsyncData } from "./use-async-data";
import type { Personnel } from "@/types";

export function usePersonnel() {
  return useAsyncData<Personnel[]>(() => personnelService.getAll(), []);
}
