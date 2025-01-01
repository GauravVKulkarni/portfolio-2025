import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system'); // Tracks user's theme preference
  const [currentTheme, setCurrentTheme] = useState('light'); // Tracks applied theme (light/dark)

  useEffect(() => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to apply theme and sync states
    const applyTheme = () => {
      const appliedTheme = theme === 'system' ? (systemPrefersDark.matches ? 'dark' : 'light') : theme;
      document.documentElement.setAttribute('data-theme', appliedTheme);
      setCurrentTheme(appliedTheme);
    };

    // Apply theme initially
    applyTheme();

    // Listen for system theme changes if 'system' is selected
    if (theme === 'system') {
      systemPrefersDark.addEventListener('change', applyTheme);
    }

    // Cleanup listener on unmount or theme change
    return () => {
      systemPrefersDark.removeEventListener('change', applyTheme);
    };
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') return 'dark';
      if (prevTheme === 'dark') return 'light';
      return currentTheme === 'dark' ? 'light' : 'dark'; // For 'system', toggle based on current theme
    });
  };

  return (
    <button
      className="theme-button"
      onClick={toggleTheme}
      style={{
        width: 'clamp(1.2rem, 3vw, 1.6rem)',
        cursor: 'pointer',
        color: 'inherit',
        background: 'none',
        border: 'none',
        marginRight: '1rem',
        paddingBottom: '1px',
      }}
      aria-label={`Toggle to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {currentTheme === 'dark' ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;