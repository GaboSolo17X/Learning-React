import { useGetProductByIdQuery } from "../app/service/dummyData";

export const SpecificProd = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(4);
  console.log(data);

  if (isError) {
    return <h1>NOOOOOOOOOOOO ERROR</h1>;
  }

  if (isLoading) {
    return <h1>LOADING</h1>;
  }
  return (
    <>
      <h5 >{data?.title}</h5>
      <p>{data?.description}</p>
    </>
  );
};
