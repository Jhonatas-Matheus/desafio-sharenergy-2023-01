const useResize = (
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>
) => {
  window.addEventListener("resize", () => setWidth(window.screen.width));
};
export { useResize };
