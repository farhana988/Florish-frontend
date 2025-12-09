/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useCallback } from "react";
import { getAddresses } from "@/services/auth/addressActions";
import { showErrorToast } from "@/utils/toast";

export function useAddresses() {
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAddresses = useCallback(async () => {
    try {
      setLoading(true);

      const result = await getAddresses();

      if (result.success && result.data) {
        setAddresses(result.data);
      } else {
        setAddresses([]);
      }
    } catch (error: any) {
      showErrorToast("Failed to load addresses", error?.message);
      setAddresses([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAddresses();
  }, [fetchAddresses]);

  return {
    addresses,
    loading,
    refresh: fetchAddresses,
    setAddresses,
  };
}
