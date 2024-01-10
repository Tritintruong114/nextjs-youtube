import { TransitionFourColumns } from "@/components";

const LibariesPage = () => {
  return (
    <section>
      <div className="grid grid-cols-3 h-screen">
        <div className="col-span-1">
          <TransitionFourColumns />
        </div>
      </div>
    </section>
  );
};

export default LibariesPage;
