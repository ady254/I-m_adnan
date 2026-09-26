import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import {
  ENERGY_DECREASE,
  LOW_ENERGY_THRESHOLD,
  lazyResponses,
  matchLazyResponse,
  type LazyResponse,
} from "../data/lazyResponses";

export interface ChatMessage {
  id: string;
  sender: "user" | "lazy";
  text: string;
  actions?: LazyResponse["actions"];
}

interface LazyContextValue {
  messages: ChatMessage[];
  energy: number;
  isExpanded: boolean;
  isSleeping: boolean;
  setExpanded: (v: boolean) => void;
  sendMessage: (text: string) => void;
  putToSleep: () => void;
}

const LazyContext = createContext<LazyContextValue | null>(null);

let msgId = 0;
const nextId = () => `msg-${++msgId}`;

export function LazyProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: nextId(),
      sender: "lazy",
      text: lazyResponses.greeting.text,
    },
  ]);
  const [energy, setEnergy] = useState(100);
  const [isExpanded, setExpanded] = useState(false);
  const [isSleeping, setIsSleeping] = useState(false);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || isSleeping) return;

      const userMsg: ChatMessage = {
        id: nextId(),
        sender: "user",
        text: text.trim(),
      };

      setMessages((prev) => [...prev, userMsg]);

      const newEnergy = Math.max(0, energy - ENERGY_DECREASE);
      setEnergy(newEnergy);

      let response: LazyResponse;
      if (newEnergy <= LOW_ENERGY_THRESHOLD) {
        response = lazyResponses.tired;
      } else {
        response = matchLazyResponse(text);
      }

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: nextId(),
            sender: "lazy",
            text: response.text,
            actions: response.actions,
          },
        ]);
      }, 400);
    },
    [energy, isSleeping]
  );

  const putToSleep = useCallback(() => {
    setIsSleeping(true);
    setMessages((prev) => [
      ...prev,
      {
        id: nextId(),
        sender: "lazy",
        text: lazyResponses.sleeping.text,
        actions: lazyResponses.sleeping.actions,
      },
    ]);
  }, []);

  return (
    <LazyContext.Provider
      value={{
        messages,
        energy,
        isExpanded,
        isSleeping,
        setExpanded,
        sendMessage,
        putToSleep,
      }}
    >
      {children}
    </LazyContext.Provider>
  );
}

export function useLazy() {
  const ctx = useContext(LazyContext);
  if (!ctx) throw new Error("useLazy must be used within LazyProvider");
  return ctx;
}
