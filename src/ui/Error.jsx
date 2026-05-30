import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-dvh px-8 py-20 text-center">
      <h1 className="text-2xl font-semibold">Something went wrong 😢</h1>
      <p className="m-8 space-x-6 text-lg">{error.data || error.message}</p>

      <LinkButton to="/">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
