
import { object } from "zod";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";



export default async function HomePage() {

  
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });



  return (
    <main>
      <div className="flex flex-wrap gap-4">

        
        {[...images, ...images,...images].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 flex flex-col">
            <img src={image.url} alt="fullmetal alchemist brotherhood" />
            <div>{image.id} &nbsp; {image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}