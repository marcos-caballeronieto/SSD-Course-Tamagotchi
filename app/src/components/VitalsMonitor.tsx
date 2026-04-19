import { useEffect } from 'react';
import { usePetStore } from '../store/usePetStore';

/**
 * Headless component responsible for running the background ticking engine
 * of the Tamagotchi. It performs the initial catch-up and 1s heartbeat.
 */
export function VitalsMonitor() {
  const tick = usePetStore((state) => state.tick);

  useEffect(() => {
    // Run an initial tick to catch up any decay that happened while offline
    tick();

    // Start the 1-second heartbeat
    const intervalId = setInterval(() => {
      tick();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [tick]);

  return null;
}
