import construexApi from "@/api/construexApi";

export async function GET() {
  try {
    const response = await construexApi.get("/get-tasks-success.json");
    return Response.json({ data: response.data }, { status: response.status });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
