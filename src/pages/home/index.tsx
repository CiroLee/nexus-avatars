import Footer from '@/components/Footer';
import GalleryImage from '@/components/GalleryImage';
import Toaster from '@/components/Sonner';
import { getProfileImage } from '@/utils/utils';
export default function Home() {
  const data = getProfileImage();
  console.log(data);
  return (
    <div className="h-screen overflow-auto">
      <div className="mt-10 mb-12 space-y-2 text-center">
        <h2 className="text-5xl font-medium text-white">Avatars</h2>
        <p className="text-base text-neutral-300">
          Free placeholder avatars, you can download them or copy the link to use in your project
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 justify-items-center gap-4 px-4 pb-20 md:grid-cols-3 md:px-0 lg:grid-cols-4 xl:grid-cols-6">
        {data.map((item) => (
          <GalleryImage loading="lazy" src={item.src} key={item.key} alt={item.name} width={512} height={512} />
        ))}
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}
