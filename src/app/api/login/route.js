import { NextResponse } from "next/server";

export async function POST(request) {
  var jwt = require("jsonwebtoken");
  const body = await request.json();
  console.log(body.rut)
  if (
    body.rut === "6748364-2" &&
    body.password=== "Contraseñ@25"
  ) {
    const token = jwt.sign(body, process.env.JWT_PRIVATE_KEY);
    return NextResponse.json({ token, data: body }, { status: 200 });
  } else {
    return NextResponse.json(
      { data: "Usuario o contraseña incorrectos" },
      { status: 400 }
    );
  }
  /* const body = NextRequest.body;


  // Process a POST request

  // Handle any other HTTP method
  /*   return NextResponse.json(
      { data: "Usuario y contraseña incorrectos" },
      { status: 400 }
    ); */
}
