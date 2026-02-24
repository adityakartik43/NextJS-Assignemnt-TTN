"use server";

import { revalidateTag } from "next/cache";

export async function revalidateImages() {
  revalidateTag("images");
}