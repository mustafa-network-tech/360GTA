"use client";

import { useMemo, useState } from "react";
import { FolderPlus, Loader2, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { SummaryCard } from "@/components/dashboard/SummaryCard";
import { ProjectsTable } from "@/components/tables/ProjectsTable";
import { useProjects } from "@/hooks/use-projects";

export default function ProjectsPage() {
  const { data: projects } = useProjects();
  const [drawer, setDrawer] = useState("");
  const [company, setCompany] = useState("");
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("");

  const drawers = Array.from(new Set(projects.map((p) => p.drawnBy)));
  const companies = Array.from(new Set(projects.map((p) => p.corporateCompany)));
  const owners = Array.from(new Set(projects.map((p) => p.workOrderBy)));

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (!drawer || p.drawnBy === drawer) &&
          (!company || p.corporateCompany === company) &&
          (!owner || p.workOrderBy === owner) &&
          (!status || p.status === status)
      ),
    [projects, drawer, company, owner, status]
  );

  const counts = {
    open: projects.filter((p) => p.status === "open").length,
    inProgress: projects.filter((p) => p.status === "in_progress").length,
    completed: projects.filter((p) => p.status === "completed").length,
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Proje Takip" description="İş emri açılan projelerin durum ve süre takibi." />

      <div className="grid gap-3 sm:grid-cols-3">
        <SummaryCard label="İş Emri Açılan Proje" value={projects.length} icon={FolderPlus} accent="info" />
        <SummaryCard label="Devam Eden Proje" value={counts.inProgress} icon={Loader2} accent="warning" />
        <SummaryCard label="Tamamlanan Proje" value={counts.completed} icon={CheckCircle2} accent="success" />
      </div>

      <Card>
        <CardContent className="grid gap-3 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          <FilterSelect label="Çizen Kişi" value={drawer} onChange={setDrawer} options={drawers} />
          <FilterSelect label="Kurumsal Firma" value={company} onChange={setCompany} options={companies} />
          <FilterSelect label="İş Emri Veren" value={owner} onChange={setOwner} options={owners} />
          <div className="space-y-1.5">
            <label className="text-sm font-medium">Durum</label>
            <Select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="">Tümü</option>
              <option value="open">Açık</option>
              <option value="in_progress">Devam Ediyor</option>
              <option value="completed">Tamamlandı</option>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Projeler ({filtered.length})</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <ProjectsTable data={filtered} />
        </CardContent>
      </Card>
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">{label}</label>
      <Select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Tümü</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </Select>
    </div>
  );
}
