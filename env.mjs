import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    TEST_URL: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    TEST_URL: process.env.TEST_URL,
  },
});
