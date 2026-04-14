import { useState, useCallback } from "react";

type ToastVariant = "default" | "destructive";

interface Toast {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
}

let listeners: ((toasts: Toast[]) => void)[] = [];
let toastList: Toast[] = [];

function notify() {
  listeners.forEach((l) => l([...toastList]));
}

export function toast(t: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2);
  toastList = [...toastList, { ...t, id }];
  notify();
  setTimeout(() => {
    toastList = toastList.filter((x) => x.id !== id);
    notify();
  }, 4000);
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const subscribe = useCallback(() => {
    const handler = (t: Toast[]) => setToasts(t);
    listeners.push(handler);
    return () => {
      listeners = listeners.filter((l) => l !== handler);
    };
  }, []);

  useState(() => {
    return subscribe();
  });

  return {
    toasts,
    toast: (t: Omit<Toast, "id">) => toast(t),
    dismiss: (id: string) => {
      toastList = toastList.filter((x) => x.id !== id);
      notify();
    },
  };
}
