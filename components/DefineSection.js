import { useThemeContext } from '../context/ThemeContext';

export default function DefineSection({ heading, children }) {
  const { theme } = useThemeContext();
  // a layout of section on /define
  return (
    <>
      <section>
        <h3>{heading}</h3>
        {children}
      </section>
      <style jsx>{`
        section {
          display: grid;
          row-gap: 0.5rem;
          direction:ltr
        }

        section h3 {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          direction:ltr
        }
      `}</style>
      <style jsx>{`
        section h3 {
          color: ${theme.color[10]};
        }
      `}</style>
    </>
  );
}
