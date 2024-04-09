import Card from "./card";

const CardsList = () => {
  return (
    <div className="h-full sm:h-3/4 md:h-1/2 grid gap-3 py-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardsList;
