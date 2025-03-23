import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const fetchData=async()=>{

//         const res= await fetch(`https://jsonplaceholder.typicode.com/todos`)
//         if(!res.ok)throw new Error('Network Response was not ok')
//         return res.json();

// }

const fetchData = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/1`);
  return res.data;
};

export const WithTanstackQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchData,
  });
  console.log(data);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <p>An error occured: {error.message}</p>;
  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
