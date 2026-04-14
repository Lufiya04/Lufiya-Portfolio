import { useToast } from "../../hooks/use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-80">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`glass rounded-xl p-4 shadow-lg border transition-all animate-slide-up ${
            t.variant === "destructive" ? "border-destructive/50 text-destructive" : "border-border"
          }`}
        >
          {t.title && <p className="font-semibold text-sm">{t.title}</p>}
          {t.description && <p className="text-xs text-muted-foreground mt-1">{t.description}</p>}
        </div>
      ))}
    </div>
  );
}
