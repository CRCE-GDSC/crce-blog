// lib/supabase-server.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY as string;

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);
