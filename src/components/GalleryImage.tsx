import { toast } from 'sonner';
import { cva } from 'class-variance-authority';
import { IconDownload, IconLink } from '@tabler/icons-react';
import { cn } from '@/lib/utils';
import { copyToClipboard } from '@/utils/utils';

const blurBlock = cva(
  `absolute bottom-1 left-[2%] flex h-10 w-[96%] opacity-0 justify-items-center rounded bg-neutral-800/70 backdrop-blur-lg backdrop-saturate-200 transition-opacity group-hover:opacity-100`
);

const btn = cva(
  'flex size-full outline-none focus-visible:text-neutral-100 cursor-pointer items-center justify-center text-neutral-300/80 hover:text-neutral-100'
);

interface GalleryImageProps extends React.ComponentPropsWithoutRef<'img'> {
  tag?: React.ReactNode;
}
export default function GalleryImage({ className, tag, ...props }: GalleryImageProps) {
  const download = `${window.location.protocol}//${window.location.host}${props.src}`;
  const copyUrl = () => {
    copyToClipboard(download).then(() => {
      toast('Copied!', { position: 'top-right' });
    });
  };
  return (
    <div
      className={cn(
        'gallery-image overflow group relative aspect-square overflow-hidden rounded border border-neutral-700/80 outline-none',
        className
      )}>
      {tag ? (
        <div className="absolute top-1 right-1 z-2 flex size-6 items-center justify-center rounded-xs bg-neutral-700/20 text-xs text-neutral-400">
          {tag}
        </div>
      ) : null}
      <img {...props} className="size-full rounded-[inherit] object-cover" />
      <div className={blurBlock()}>
        <a href={download} download={props.alt} className={btn()}>
          <IconDownload size={20} className="transition-colors" />
        </a>
        <div className="relative top-1/2 h-4 w-px -translate-y-1/2 bg-neutral-400"></div>
        <button className={btn()} onClick={copyUrl}>
          <IconLink size={20} className="transition-colors" />
        </button>
      </div>
    </div>
  );
}
