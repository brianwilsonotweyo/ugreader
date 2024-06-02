import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";




async function getData() {
  const query = "*[_type == 'heroImage'][0]";

  try {
    const data = await client.fetch(query);
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching hero image data:", error);
    return null;
  }
}


export default async function Hero() {
  const data = await getData();
  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Access thousands of books with our ereaders.
          </h1>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            Experience limitless reading pleasure -
            thousands of books at your fingertips, wherever you go.
          </p>
        </div>

        <div className="mb-12 flex w-full justify-center items-center md:mb-16 lg:w-2/3">
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            {data && data.image1 ? (
              <Image
                src={urlFor(data.image1).url()}
                alt="Great Photo"
                className="h-full w-full object-cover object-center"
                priority
                width={500}
                height={500}
              />
            ) : (
              <div>There are no images</div>
            )}
          </div>
</div>

      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/eink"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            E-Ink
          </Link>
          <Link
            href="/coloured"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Coloured
          </Link>
          <Link
            href="/robot"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Robot
          </Link>
        </div>
      </div>
    </section>
  );
}