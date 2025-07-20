import { Toaster as SonnerToaster } from 'sonner';
export default function Toaster() {
  return (
    <SonnerToaster
      richColors
      duration={2000}
      theme="dark"
      style={
        {
          '--normal-bg': 'var(--color-neutral-800)'
        } as React.CSSProperties
      }
    />
  );
}
