"use client";

import * as React from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/**
 * Görsel dosya yükleme alanı. ŞU AN gerçek yükleme YAPMAZ;
 * yalnızca seçilen dosya adını gösterir (demo). İleride Supabase Storage'a bağlanacak.
 */
function FileDropzone({ label = "Dosya Yükle", className }: { label?: string; className?: string }) {
  const [fileName, setFileName] = React.useState<string | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <button
      type="button"
      onClick={() => inputRef.current?.click()}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/30 px-4 py-6 text-center transition-colors hover:border-primary/50 hover:bg-muted/60",
        className
      )}
    >
      <UploadCloud className="size-6 text-muted-foreground" />
      <span className="text-sm font-medium text-foreground">{fileName ?? label}</span>
      <span className="text-xs text-muted-foreground">
        {fileName ? "Değiştirmek için tıklayın" : "PDF, JPG, PNG · sürükle veya seç (demo)"}
      </span>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
      />
    </button>
  );
}

export { FileDropzone };
