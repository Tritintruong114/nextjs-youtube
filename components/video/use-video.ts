interface UseVideoProps {
  useVideo?: () => void;
}
export const useVideo = (props: UseVideoProps) => {
  const useVideo = () => {};
  return { useVideo };
};
