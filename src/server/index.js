import { setupWorker } from "msw/browser";
import { mockGetNotes } from "./mocks/mockGetNotes";

export const worker = setupWorker(mockGetNotes);
