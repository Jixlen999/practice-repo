import { http, HttpResponse } from "msw";

/**
 * @param {string} path - API path
 * @param {object} jsonResponse - JSON object to return in the response
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param {number} statusCode - HTTP status code to return (default: 200)
 */
export const mockApiResponse = (
  path,
  jsonResponse,
  method = "GET",
  statusCode = 200
) => {
  return http[method.toLocaleLowerCase()](path, () => {
    return HttpResponse.json(jsonResponse, { status: statusCode });
  });
};
