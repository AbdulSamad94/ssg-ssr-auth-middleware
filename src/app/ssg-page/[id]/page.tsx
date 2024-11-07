type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: User[] = await response.json();

  // Generate a list of params for static generation
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
const SSGpage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${(await params).id}`
  );
  const data: User = await response.json();
  return (
    <section className="py-3 px-8">
      <div>
        Name : <span className="font-semibold">{data.name}</span>
      </div>
      <div>
        username : <span className="font-semibold">{data.username}</span>
      </div>
      <div>
        Email : <span className="font-semibold">{data.email}</span>
      </div>
    </section>
  );
};

export default SSGpage;
