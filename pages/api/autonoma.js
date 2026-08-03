import { createExpressHandler } from "@autonoma-ai/server-express";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = createExpressHandler({
  scopeField: "id",
  sharedSecret: process.env.AUTONOMA_SHARED_SECRET,
  signingSecret: process.env.AUTONOMA_SIGNING_SECRET,
  factories: {},
  auth: async () => ({ headers: {} }),
});

export default handler;
