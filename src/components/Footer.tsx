import { IconBrandGithubFilled } from '@tabler/icons-react';
import { cva } from 'class-variance-authority';
const footerItem = cva('flex items-center gap-1 text-sm text-neutral-400 transition-colors hover:text-neutral-100');
export default function Footer() {
  return (
    <footer className="h-20 bg-zinc-900">
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-end space-x-6 px-4">
        <a
          className={footerItem()}
          href="https://github.com/CiroLee/nexus-kit"
          target="_blank"
          rel="noopener noreferrer">
          Nexus-Kit
        </a>
        <a
          href="https://github.com/CiroLee/nexus-avatars"
          target="_blank"
          rel="noopener noreferrer"
          className={footerItem()}>
          <IconBrandGithubFilled size={16} />
          Github
        </a>
      </div>
    </footer>
  );
}
