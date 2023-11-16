"use client";

import { trpc } from "~/app/_trpc/client";

export default function ClientComponent() {
  const { data, isLoading } = trpc.getHello.useQuery();

  return (
    <div className="flex flex-row justify-center w-full">
      <h1>{isLoading ? "Loading..." : data}</h1>
    </div>
  );
}
