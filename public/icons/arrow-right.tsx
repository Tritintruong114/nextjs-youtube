const ArrowRight = (props: any) => {
  const { className } = props;

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 4.58578L20.4142 12L13 19.4142L11.5858 18L16.5858 13H4V11H16.5858L11.5858 6L13 4.58578Z"
        className={className}
      />
    </svg>
  );
};

export default ArrowRight;
