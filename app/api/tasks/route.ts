import construexApi from "@/api/construexApi";
import { ITask } from "@/interfaces/Task";

export async function GET() {
  try {
    const response = await construexApi.get("/get-tasks-success.json");
    const data = response.data;
    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const taskJson = (await request.json()) as ITask;

    const response = await construexApi.get("/create-task-success.json", {
      data: taskJson,
    });
    const data = response.data;
    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const taskJson = (await request.json()) as ITask;

    const response = await construexApi.get("/update-task-success.json", {
      data: taskJson,
    });
    const data = response.data;
    return Response.json(data, { status: response.status });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
