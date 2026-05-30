import { useEffect, useRef } from "react";

type AppStateLike = {
  addEventListener: (
    event: "change",
    listener: (state: string) => void
  ) => { remove: () => void };
  currentState: string;
};

type AppStateModule = {
  AppState: AppStateLike;
};

/**
 * Reconnects wallet/session providers when the app returns to foreground.
 * Useful in React Native where WebSocket RPC connections drop in background.
 */
export function useAppStateReconnect(
  onReconnect: () => void | Promise<void>,
  appStateModule?: AppStateModule
): void {
  const callbackRef = useRef(onReconnect);

  useEffect(() => {
    callbackRef.current = onReconnect;
  }, [onReconnect]);

  useEffect(() => {
    const AppState = appStateModule?.AppState;

    if (!AppState) {
      return;
    }

    let previousState = AppState.currentState;

    const subscription = AppState.addEventListener("change", (nextState) => {
      const becameActive =
        previousState.match(/inactive|background/) && nextState === "active";

      if (becameActive) {
        void callbackRef.current();
      }

      previousState = nextState;
    });

    return () => subscription.remove();
  }, [appStateModule]);
}
