import Header from "@/components/Header";
import Image from "next/image";
import getAddedSongs from "@/actions/getAddedSongs";
import AddedContent from "./components/AddedContent";

export const revalidate = 0;

const Added = async () => {
  const songs = await getAddedSongs();

  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
      "
    >
      <Header>
        <div className="mt-20">
          <div
            className="
              flex
              flex-col
              md:flex-row
              items-center
              gap-x-4
            "
          >
            <div className="
              relative
              h-32
              w-32
              lg:h-44
              lg:w-44
            ">
              <Image 
                fill
                alt="Playlist"
                className="object-cover"
                src="/images/liked.png"
              />
            </div>
            <div className="
              flex
              flex-col
              gap-y-2
              mt-4
              md:mt-0
            ">
              <h1 className="
                text-white
                text-4xl
                sm:text-5xl
                lg:text-7xl
                font-bold
              ">
                Добавленные треки
              </h1>
            </div>
          </div>
        </div>
      </Header>
      <AddedContent songs={songs}/>
    </div>
  );
}

export default Added;