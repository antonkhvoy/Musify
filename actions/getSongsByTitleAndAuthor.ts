import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Song } from "@/types";
import getSongs from "./getSongs";

const getSongsByTitleAndAuthor = async (search_value: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if(!search_value) {
    const allSongs = await getSongs();
    return allSongs;
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .or(`title.ilike.%${search_value}%, author.ilike.%${search_value}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error);
  }

  return (data as any) || [];
};

export default getSongsByTitleAndAuthor;