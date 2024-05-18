
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";

export const dynamic = "force-dynamic";

async function Images() {

  const images = await getMyImages();


  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map ((image) => (
        <div key={image.id} className="h-48 w-48 flex flex-col">
          <Image 
            src={image.url} 
            style={{objectFit: "contain"}} 
            width={192} 
            height={192}
            alt="FMA:B" />
          <div>{image.id} &nbsp; {image.name}</div>
        </div>
      ))}
    </div>
  );
}


export default async function HomePage() {

  return (
    <main>
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>

    </main>
  );
}