import supabase from "@/app/utils/supabaseClient";

export const fetchPlugginsAndAddons = async () => {
  const { data, error } = await supabase.from("pluggins_and_addons").select("*");

  if (error) {
    console.error("Error fetching plugins & addons:", error.message);
    return [];
  }

  return data;
};
