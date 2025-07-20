export const getProfileImage = () => {
  const data = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,gif,svg}', { eager: true });
  const result = Object.entries(data).map(([path, module]) => ({
    key: path,
    src: (module as { default: string }).default,
    name: path.split('/').pop() as string
  }));

  return result;
};

export function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text);
}
