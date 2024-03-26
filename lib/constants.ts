import { assertExists } from "@/app/utils";

export const VD_REPORTS_ENDPOINT = "https://directus.voicedeck.org";
export const CMS_ACCESS_TOKEN = assertExists(process.env.NEXT_CMS_ACCESS_TOKEN as string);