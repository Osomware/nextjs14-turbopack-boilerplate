import { serverClient } from "~/app/_trpc/server-client";

export default async function ServerComponent() {
  const getHello = await serverClient.getHello();

  return (
    <div className="flex flex-row justify-center w-full">
      <h1>{getHello}</h1>
    </div>
  );
}
