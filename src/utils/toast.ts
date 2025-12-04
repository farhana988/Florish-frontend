import { toast } from "sonner";

export function showSuccessToast(title: string, description?: string) {
  toast.success(title, {
    description,
    duration: 4000,
  });
}

export function showErrorToast(title: string, description?: string) {
  toast.error(title, {
    description,
    duration: 5000,
  });
}
