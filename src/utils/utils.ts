export const getProfileImage = () => {
  const data = import.meta.glob('/src/assets/profile/*.{png,jpg,jpeg,gif,svg}', { eager: true });
  const result = Object.entries(data)
    .map(([path, module]) => ({
      key: path,
      src: (module as { default: string }).default,
      name: path.split('/').pop() as string
    }))
    .sort((a, b) => {
      const numA = parseInt(a.name.replace(/[^0-9]/g, ''));
      const numB = parseInt(b.name.replace(/[^0-9]/g, ''));
      return numA - numB;
    });

  return result;
};

export function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text);
}
