"use server";

import { createDirectus, rest, updateItems, staticToken } from "@directus/sdk";
import { CMS_ACCESS_TOKEN, VD_REPORTS_ENDPOINT } from "./constants";

export const updateCMS = async (ids: string[]) => {
  const client = createDirectus(VD_REPORTS_ENDPOINT)
    .with(staticToken(CMS_ACCESS_TOKEN))
    .with(rest());

  try {
    await client.request(
      updateItems("reports", ids, {
        Minted: true,
      }),
    );
  } catch (error) {
    throw error;
  }
};
