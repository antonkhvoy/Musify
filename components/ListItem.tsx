"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { FaPlay } from "react-icons/fa"

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({
  image,
  name,
  href
}) => {
  const router = useRouter();

  const onClick = () => {
    router.push(href);
  }

  return (
    <button
      onClick={onClick}
      className="
        flex 
        items-center 
        gap-x-3 
        cursor-pointer 
        hover:bg-neutral-800/50 
        w-full 
        p-2 
        rounded-md
      "
    >

      <div className="
        relative 
        rounded-md 
        min-h-[48px] 
        min-w-[48px] 
        overflow-hidden
      ">
        <Image 
          className="object-cover"
          fill
          src={image}
          alt="Image"
        />
      </div>
      <div className="
        flex 
        flex-col 
        gap-y-1 
        overflow-hidden
      ">
        <p className="text-white truncate">
          {name}
        </p>
      </div>

    </button>
  );
}

export default ListItem;