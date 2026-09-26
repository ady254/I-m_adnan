import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { X, Send } from "lucide-react";
import { useLazy } from "../context/LazyContext";
import { suggestedQuestions } from "../data/lazyResponses";
import { EnergyMeter } from "./EnergyMeter";
import { PixelAvatar } from "./PixelAvatar";
import { PixelButton } from "./PixelButton";

export function LazyBot() {
  const navigate = useNavigate();
  const {
    messages,
    energy,
    isExpanded,
    isSleeping,
    setExpanded,
    sendMessage,
    putToSleep,
  } = useLazy();
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isSleeping) return;
    sendMessage(input);
    setInput("");
  };

  const handleAction = (action: {
    label: string;
    route?: string;
    type?: "navigate" | "sleep";
  }) => {
    if (action.type === "sleep") {
      putToSleep();
      return;
    }
    if (action.route) {
      navigate(action.route);
      setExpanded(false);
    }
  };

  if (!isExpanded) {
    return (
      <button
        type="button"
        onClick={() => setExpanded(true)}
        className="fixed bottom-14 lg:bottom-4 right-4 z-40 flex items-center gap-2 px-4 py-2.5 pixel-border-cyan bg-os-panel/95 hover:bg-neon-cyan/10 transition-all font-pixel text-[8px] sm:text-[10px] text-neon-cyan shadow-lg"
        aria-label="Open Lazy.exe chatbot"
      >
        <PixelAvatar variant="bot" className="w-6 h-6" />
        LAZY.EXE
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-12 lg:bottom-4 right-0 sm:right-4 z-40 w-full sm:w-96 max-h-[60vh] sm:max-h-[480px] flex flex-col pixel-border-cyan bg-os-panel/98 shadow-2xl animate-[slideUp_0.3s_ease]"
      role="dialog"
      aria-label="Lazy.exe chatbot"
    >
      <div className="window-titlebar flex items-center justify-between px-3 py-2 shrink-0">
        <div className="flex items-center gap-2">
          <PixelAvatar variant="bot" className="w-5 h-5" />
          <span className="font-pixel text-[8px] sm:text-[10px] text-neon-cyan">
            LAZY.EXE
          </span>
        </div>
        <button
          type="button"
          onClick={() => setExpanded(false)}
          className="text-text-muted hover:text-neon-pink p-1"
          aria-label="Minimize Lazy.exe"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3 min-h-[120px] max-h-[240px]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`text-sm ${msg.sender === "user" ? "text-right" : ""}`}
          >
            <div
              className={`inline-block max-w-[90%] px-3 py-2 rounded-sm text-left whitespace-pre-line ${
                msg.sender === "user"
                  ? "bg-neon-pink/15 text-neon-pink border border-neon-pink/30"
                  : "bg-os-bg/80 text-text-muted border border-os-border"
              }`}
            >
              {msg.text}
            </div>
            {msg.actions && msg.sender === "lazy" && (
              <div className="flex flex-wrap gap-2 mt-2">
                {msg.actions.map((action) => (
                  <PixelButton
                    key={action.label}
                    variant="cyan"
                    size="sm"
                    onClick={() => handleAction(action)}
                  >
                    [ {action.label} ]
                  </PixelButton>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {!isSleeping && energy > 15 && (
        <div className="px-3 pb-2">
          <p className="font-pixel text-[6px] text-text-muted mb-1.5">
            QUICK REPLY
          </p>
          <div className="flex flex-wrap gap-1.5">
            {suggestedQuestions.slice(0, 4).map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="font-pixel text-[6px] px-2 py-1 border border-os-border text-text-muted hover:border-neon-cyan hover:text-neon-cyan transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="p-3 border-t border-os-border shrink-0">
        {!isSleeping ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="flex-1 bg-os-bg border border-os-border px-3 py-2 text-sm text-white placeholder:text-text-muted/50 focus:border-neon-cyan outline-none font-body"
              aria-label="Ask Lazy.exe a question"
              disabled={energy <= 15}
            />
            <button
              type="submit"
              disabled={!input.trim() || energy <= 15}
              className="px-3 py-2 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        ) : (
          <PixelButton
            variant="pink"
            size="md"
            className="w-full"
            onClick={() => {
              navigate("/contact");
              setExpanded(false);
            }}
          >
            [ CONNECT TO ADNAN ]
          </PixelButton>
        )}

        <div className="mt-3">
          <EnergyMeter energy={energy} compact />
        </div>
      </div>
    </div>
  );
}
