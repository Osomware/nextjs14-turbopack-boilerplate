import ClientComponent from "~/components/ClientComponent";
import ServerComponent from "~/components/ServerComponent";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-y-10">
      <div className="flex flex-col items-center w-full gap-y-1">
        <h1 className="font-bold text-2xl">Welcome to Nextjs 14</h1>
        <h2 className="font-light">
          My boilerplate using NextJS 14, Turbopack, tRPC, Tanstack, and Prisma
        </h2>
      </div>
      <div className="flex flex-col items-center w-full gap-y-3">
        <ClientComponent />
        <ServerComponent />
      </div>
    </div>
  );
}
