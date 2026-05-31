/**
 * Uygulama içi tüm rota sabitleri tek noktada tutulur.
 */
export const ROUTES = {
  home: "/",
  login: "/login",
  dashboard: "/dashboard",
  newWork: "/new-work",
  constructionSites: "/construction-sites",
  finance: "/finance",
  projects: "/projects",
  purchasing: "/purchasing",
  personnel: "/personnel",
  reports: "/reports",
  settings: "/settings",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
