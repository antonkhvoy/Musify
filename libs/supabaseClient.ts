import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

import { Database } from '@/types_db';

export const supabase = createBrowserSupabaseClient<Database>();

export const getSongs = async (): Promise<any> => {
  const { data, error } = await supabase
    .from('songs')
    .select('*')

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export const getSongsByUserId = async (userId?: string): Promise<any> => {
  if (!userId) {
    return [];
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .eq('user_id', userId)

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export const getSongsByTitleAndAuthor = async (title?: string): Promise<any> => {
  if (!title) {
    return [];
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('title', title)

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};
