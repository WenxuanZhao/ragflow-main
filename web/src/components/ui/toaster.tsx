'use client';

import { useToast } from '@/components/hooks/use-toast';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
<<<<<<< HEAD
      {toasts.map(function ({ id, title, description, action, ...props }: any) {
=======
      {toasts.map(function ({ id, title, description, action, ...props }) {
>>>>>>> 4f9504305a238b4fd3346c988bb1e7872b79d192
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
