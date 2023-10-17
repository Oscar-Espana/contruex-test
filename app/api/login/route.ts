import construexApi from "@/api/construexApi";
import { IUserLogin } from "@/interfaces/User";

export async function POST(request: Request) {
  const loginJson = (await request.json()) as IUserLogin;

  try {
    const response = await construexApi.get("/auth-login-success.json", {
      data: loginJson,
    });
    return Response.json({ data: response.data }, { status: response.status });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
