import { NextResponse } from "next/server";

// Simples armazenamento em memória (em produção, use um banco de dados)
let locations: Array<{
  id: number;
  latitude: number;
  longitude: number;
  accuracy: number;
  car: number;
}> = [];
// Handler para o método POST
export async function POST(req: Request) {
  const { latitude, longitude, accuracy, id, car } = await req.json();

  if (
    typeof latitude === "number" &&
    typeof longitude === "number" &&
    typeof accuracy === "number" &&
    typeof id === "number" &&
    typeof car === "number"
  ) {
    // Armazenar a localização recebida
    locations.push({ id, latitude, longitude, accuracy, car });

    return NextResponse.json({
      message: "Location data received successfully",
      data: locations,
    });
  } else {
    return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
  }
}

// Handler para o método GET
export async function GET() {
  // Retorna todas as localizações armazenadas
  return NextResponse.json({ data: locations });
}
