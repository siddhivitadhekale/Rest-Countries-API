import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return <div>smething went wrong {error.status}</div>;
}
