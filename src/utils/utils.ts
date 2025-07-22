export const getProfileImage = () => {
  const imagePaths = Object.keys(import.meta.glob('/public/images/**/*.{png,jpg,jpeg,gif,svg}', { eager: true }));
  const publicImageUrls = imagePaths.map((path) => path.replace('/public', ''));
  const result = publicImageUrls.map((item, index) => ({
    key: index,
    src: item,
    name: item.split('/').pop()
  }));

  return result;
};

export function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text);
}
