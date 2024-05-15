
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/25320b72-3cd6-41e6-b436-836ae16cdb7d-oh6ymc.png",
  "https://utfs.io/f/c38dce96-ca7b-4c55-95d7-00477bd04a61-oh6fbd.png",
  "https://utfs.io/f/a7377154-9c85-4dce-851c-0957fcb308c1-oh6eoz.png",
  "https://utfs.io/f/db3f04a8-b910-4d63-8b2b-b72dbe39475f-oh6eoy.png",
  "https://utfs.io/f/832ed77e-cdae-4005-ab8f-cb402c977930-oh6g4v.png",

]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,

}))


export default async function HomePage() {

  
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} >
            {post.name}
          </div>
        ))}
        
        {[...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="fullmetal alchemist brotherhood" />
          </div>
        ))}
      </div>
    </main>
  );
}