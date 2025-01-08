import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { loginSchema, registerSchema } from "../schemas";

const app = new Hono()
  .post("/login", zValidator("json", loginSchema), (c) => {
    const { email, password } = c.req.valid("json");
    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerSchema), (c) => {
    const { email, name, password } = c.req.valid("json");
    return c.json({ email, name, password });
  });
export default app;
