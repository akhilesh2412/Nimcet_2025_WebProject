'use client';

import { useEffect, useMemo, useState } from 'react';
import type { ISourceOptions } from '@tsparticles/engine';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';

export function BackgroundAnimation() {
  const [init, setInit] = useState(false);
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  
  const options: ISourceOptions = useMemo(() => {
    // We use hardcoded HSL values because the library doesn't parse CSS variables.
    // These colors are derived from your tailwind theme (globals.css).
    const particleColor = currentTheme === 'dark' ? 'hsl(231, 48%, 70%)' : 'hsl(231, 48%, 48%)';
    const backgroundColor = currentTheme === 'dark' ? 'hsl(240, 10%, 3.9%)' : 'hsl(0, 0%, 96.1%)';

    return {
      background: {
        color: {
          value: backgroundColor,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          grab: {
            distance: 180,
            links: {
                opacity: 0.8,
            }
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: particleColor,
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 900,
          },
          value: 80,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    };
  }, [currentTheme]);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        className="fixed inset-0 -z-50"
      />
    );
  }

  return null;
}
