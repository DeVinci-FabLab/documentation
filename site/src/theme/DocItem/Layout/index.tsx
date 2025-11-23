import { useLocation } from "@docusaurus/router";
import type { WrapperProps } from "@docusaurus/types";
import OriginalLayout from "@theme-original/DocItem/Layout";
import type LayoutType from "@theme/DocItem/Layout";
import React, { FormEvent, useEffect, useState, type ReactNode } from "react";

type Props = WrapperProps<typeof LayoutType>;

const INTERNAL_BASE = "/internal-documentation";
const PASSWORD = "merci-aust1";
const STORAGE_KEY = "dvfl-doc-internal-access";

export default function LayoutWrapper(props: Props): ReactNode {
  const location = useLocation();
  const isInternal = location.pathname.startsWith(INTERNAL_BASE);
  const [authorized, setAuthorized] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isInternal) {
      return;
    }
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "granted") {
      setAuthorized(true);
    }
  }, [isInternal]);

  useEffect(() => {
    if (isInternal && !authorized) {
      document.documentElement.setAttribute("data-internal-locked", "true");
    } else {
      document.documentElement.removeAttribute("data-internal-locked");
    }

    return () => {
      document.documentElement.removeAttribute("data-internal-locked");
    };
  }, [isInternal, authorized]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (input.trim() === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "granted");
      setAuthorized(true);
      setError("");
      return;
    }
    setError("Mot de passe incorrect. Reessayez.");
  };

  if (isInternal && !authorized) {
    return (
      <div className="container margin-vert--lg" style={{ maxWidth: 720 }}>
        <main style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "0.75rem" }}>Documentation Interne</h1>
          <p
            style={{
              color: "var(--ifm-color-emphasis-700)",
              marginBottom: "1.5rem",
            }}
          >
            Acces restreint. Saisissez le mot de passe pour consulter le
            contenu.
          </p>

          <form
            onSubmit={handleSubmit}
            style={{ display: "grid", gap: "0.75rem", maxWidth: "360px" }}
          >
            <label style={{ display: "grid", gap: "0.4rem" }}>
              <span style={{ fontWeight: 600 }}>Mot de passe</span>
              <input
                type="password"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                style={{
                  padding: "0.6rem 0.75rem",
                  borderRadius: "8px",
                  border: "1px solid var(--ifm-color-emphasis-300)",
                  fontSize: "1rem",
                  background: "var(--ifm-background-color)",
                  color: "var(--ifm-font-color-base)",
                }}
                placeholder="Entrer le mot de passe"
                autoComplete="current-password"
                required
              />
            </label>
            <button
              type="submit"
              style={{
                padding: "0.65rem 0.9rem",
                borderRadius: "8px",
                border: "none",
                background: "var(--ifm-color-primary)",
                color: "#fff",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Acceder
            </button>
            {error && (
              <span style={{ color: "var(--ifm-color-danger)" }}>{error}</span>
            )}
          </form>
        </main>
      </div>
    );
  }

  return <OriginalLayout {...props} />;
}
