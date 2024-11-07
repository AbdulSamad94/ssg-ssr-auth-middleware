import Link from "next/link";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const SSRpage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  return (
    <div className="h-auto flex flex-col gap-10 py-3 px-8">
      {data.map((items, i) => (
        <div className="flex gap-20 justify-between border-b py-4" key={i}>
          <div>
            <h1>{items.name}</h1>
            <h1>{items.username}</h1>
            <h1>{items.email}</h1>
          </div>

          <Link
            href={`/ssg-page/${items.id}`}
            className="text-center w-36 flex justify-center items-center h-10 border border-black rounded"
          >
            page using SSG
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SSRpage;
