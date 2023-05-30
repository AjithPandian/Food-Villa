import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h1>Oops!!!</h1>
      <h2>Something went wrong.</h2>
      <h2>{`${error.status} : ${error.statusText}`}</h2>
    </>
  );
};

export default Error;
