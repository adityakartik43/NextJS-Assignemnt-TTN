import Image from "next/image";
import PopupTrigger from "./components/PopupTrigger";
import RevalidateButton from "./components/RevalidateButton";

async function getImages(cacheMode) {
  const res = await fetch(
    "https://picsum.photos/id/1/200/300",
    {
      cache: cacheMode,
      next: { tags: ["images"] },
    }
  );

  return res.url;
}

export default async function Page() {
  const cachedImages = await getImages("force-cache");
  const freshImages = await getImages("no-store");

  console.log("Cached image:", cachedImages);
  console.log("Fresh image:", freshImages);

  return (
    <div className="flex justify-between items-center flex-col m-5">
      <h1 className="font-bold text-xl">NextJS image caching</h1>

      <RevalidateButton />

      <div className="flex justify-around">
        <div className="bg-blue-900 p-2 rounded-xl m-2">
      <h2>Force Cache</h2>
      <Image
        src={cachedImages}
        width={200}
        height={300}
        alt="Cached Image"
      />
      </div>

      <div className="bg-blue-900 p-2 rounded-xl m-2">

      <h2>No Store</h2>
      <Image
        src={freshImages}
        width={200}
        height={300}
        alt="Fresh Image"
      />

      </div>
      </div>

      <PopupTrigger />
    </div>
  );
}