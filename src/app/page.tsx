import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div>
        <Link
          href={`/ssr-page`}
          className="text-2xl text-center py-6 px-10 border border-black rounded-xl"
        >
          page using SSR
        </Link>
      </div>
    </main>
  );
}
