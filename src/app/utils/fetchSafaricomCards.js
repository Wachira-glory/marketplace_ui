// utils/fetchCards.js

// export const fetchCards = async (tableName) => {
//   console.log("Supabase API Key:", process.env.SUPABASE_ANON_KEY); 

//   const response = await fetch(`https://zbvsypwadtguokbmhqzg.supabase.co/rest/v1/${tableName}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'apikey': process.env.SUPABASE_ANON_KEY,
//       'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`,
//     },
//   });

//   if (!response.ok) {
//     throw new Error('Failed to fetch cards');
//   }

//   const data = await response.json();
//   return data;
// };

import supabase from "./supabaseClient";

export const fetchCards = async () => {
  try {
    console.log("Fetching Safaricom cards...");

    const { data, error } = await supabase
      .from("marketplace_safaricom")
      .select("*");

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    console.log("Fetched cards:", data);
    return data;
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
};
