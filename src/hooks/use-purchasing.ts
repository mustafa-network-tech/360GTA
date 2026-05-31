"use client";

import { purchasingService } from "@/services/purchasing.service";
import { useAsyncData } from "./use-async-data";
import type { PurchaseItem } from "@/types";

export function usePurchasing() {
  return useAsyncData<PurchaseItem[]>(() => purchasingService.getAll(), []);
}
