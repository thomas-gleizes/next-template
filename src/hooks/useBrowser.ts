import { useMemo } from "react";

export default function useBrowser() {
  return useMemo<boolean>(() => typeof window === "object", [typeof window]);
}
