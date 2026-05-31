"use client";

import { projectsService } from "@/services/projects.service";
import { useAsyncData } from "./use-async-data";
import type { Project } from "@/types";

export function useProjects() {
  return useAsyncData<Project[]>(() => projectsService.getAll(), []);
}
