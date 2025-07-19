import { useEffect } from "react";

const useAntiInspect = (): void => {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const forbidden =
        (e.ctrlKey && ["u", "c", "s"].includes(e.key.toLowerCase())) || // Ctrl+U, Ctrl+C, Ctrl+S
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I", "J"].includes(e.key.toUpperCase()));

      if (forbidden) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};

export default useAntiInspect;
