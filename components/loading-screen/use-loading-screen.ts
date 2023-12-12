interface UseLoadingScreenProps {
  useLoadingScreen?: () => void;
}
export const useLoadingScreen = (props: UseLoadingScreenProps) => {
  const useLoadingScreen = () => {};
  return { useLoadingScreen };
};
