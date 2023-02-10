import { Client } from "@notionhq/client";

const API_key = "secret_8oekjJVsjHwppBp3KbmB4m1TJL6O9sgborL5aEMCddg";
export const notionClient = new Client({ auth: API_key })