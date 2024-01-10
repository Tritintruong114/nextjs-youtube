const ElementPage = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};

export default ElementPage;
