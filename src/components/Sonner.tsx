import { Toaster as SonnerToaster } from 'sonner';
export default function Toaster() {
  return (
    <SonnerToaster
      richColors
      duration={2000}
      theme="dark"
      style={{ '--normal-bg': '#232222', '--normal-birder': 'var(--color-neutral-700)' } as React.CSSProperties}
    />
  );
}
