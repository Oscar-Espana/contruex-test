import construexApi from "@/api/construexApi";

export async function GET() {
  try {
    const response = await construexApi.get("/get-tasks-success.json");
    const data = response.data;
    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
