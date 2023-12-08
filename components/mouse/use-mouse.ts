interface UseMouseProps {
  useMouse?: () => void;
}
export const useMouse = (props: UseMouseProps) => {
  const useMouse = () => {};
  return { useMouse };
};
