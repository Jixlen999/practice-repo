import { mockApiResponse } from "../utils/mockApiResponse";
import getNotes from "./getNotes";

export const mockGetNotes = mockApiResponse(
  "https://localhost:7103/notes",
  getNotes
);
