import { useQuasar } from 'quasar';
import { errorMessage } from '@/services/http';

export function useNotify() {
  const $q = useQuasar();

  return {
    success: (message: string) => $q.notify({ type: 'positive', message, icon: 'check_circle' }),
    error: (error: unknown) =>
      $q.notify({ type: 'negative', message: errorMessage(error), icon: 'error' }),
    confirm: (title: string, message: string) =>
      new Promise<boolean>((resolve) => {
        $q.dialog({
          title,
          message,
          dark: true,
          cancel: { label: 'Cancelar', flat: true, color: 'grey-5' },
          ok: { label: 'Confirmar', color: 'primary', unelevated: true },
          persistent: true,
        })
          .onOk(() => resolve(true))
          .onCancel(() => resolve(false))
          .onDismiss(() => resolve(false));
      }),
  };
}
