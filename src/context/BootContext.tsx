import { createContext, useContext, useState, type ReactNode } from "react";

interface BootContextValue {
  hasBooted: boolean;
  completeBoot: () => void;
}

const BootContext = createContext<BootContextValue | null>(null);

export function BootProvider({ children }: { children: ReactNode }) {
  const [hasBooted, setHasBooted] = useState(
    () => sessionStorage.getItem("adnan-os-booted") === "true"
  );

  const completeBoot = () => {
    sessionStorage.setItem("adnan-os-booted", "true");
    setHasBooted(true);
  };

  return (
    <BootContext.Provider value={{ hasBooted, completeBoot }}>
      {children}
    </BootContext.Provider>
  );
}

export function useBoot() {
  const ctx = useContext(BootContext);
  if (!ctx) throw new Error("useBoot must be used within BootProvider");
  return ctx;
}
