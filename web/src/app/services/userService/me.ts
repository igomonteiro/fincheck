import { httpClient } from "../httpClient";

interface MeResponse {
  name: string;
  email: string;
}

export async function me() {
  const { data } = await httpClient.post<MeResponse>("/users/me");
  return data;
}
