import { apis } from "./apis";
import { setupServer } from "msw/node";

export const server = setupServer(...apis);
