import { createClient } from '@supabase/supabase-js';
import { Database } from '@/types_db';


const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const insertSongRecord = async ({
  uuid,
  title,
  author,
  imagePath,
  songPath,
}: {
  uuid: string;
  title: string;
  author: string;
  imagePath: string;
  songPath: string;
}) => {
  const songData = {
    user_id: uuid,
    title: title,
    author: author,
    image_path: imagePath || '/public/images/music-placeholder.png',
    song_path: songPath,
  };

  const { error: supabaseError, data } = await supabaseAdmin
      .from('songs')
      .insert(songData);
    if (supabaseError) throw supabaseError;

    console.log(`Song created: ${title}`);

    return data;
};

export {
  insertSongRecord
};
