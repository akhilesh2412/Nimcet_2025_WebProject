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
    const particleColor = currentTheme === 'dark' ? 'hsl(0 0% 98%)' : 'hsl(0 0% 3.9%)';
    const linkColor = currentTheme === 'dark' ? 'hsl(0 0% 98%)' : 'hsl(0 0% 3.9%)';
    const backgroundColor = currentTheme === 'dark' ? 'hsl(240 10% 3.9%)' : 'hsl(0 0% 96.1%)';

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
            distance: 150,
            links: {
                opacity: 0.5,
            }
          },
        },
      },
      particles: {
        color: {
          value: particleColor,
        },
        links: {
          color: linkColor,
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: true,
          speed: 0.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 60,
        },
        opacity: {
          value: 0.25,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 3 },
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
