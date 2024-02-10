import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "mee6zky5",
  dataset: "production",
  apiVersion: "2023-07-13",
  useCdn: true,
});
