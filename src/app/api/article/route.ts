import { NextRequest, NextResponse } from "next/server";
import { db, storage } from "@/lib/firebaseClient";
import { v4 as uuidv4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Buffer } from "buffer";

// Interface para tipado estricto
interface ParsedFormData {
  title: string;
  content: string;
  file: Buffer;
  filename: string;
  mime: string;
}

// Helper para parsear FormData en el backend
async function parseFormData(req: NextRequest): Promise<ParsedFormData> {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const file = formData.get("image") as File;

  if (!title || !content || !file) {
    throw new Error("Faltan campos: title, content o image");
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  return {
    title,
    content,
    file: buffer,
    filename: file.name,
    mime: file.type,
  };
}

export async function POST(req: NextRequest) {
  try {
    const { title, content, file, filename, mime } = await parseFormData(req);

    // Subimos imagen a Firebase Storage
    const uniqueId = uuidv4();
    const storageRef = ref(storage, `articles/${uniqueId}_${filename}`);
    await uploadBytes(storageRef, file, { contentType: mime });

    const downloadURL = await getDownloadURL(storageRef);

    // Guardamos documento en Firestore
    await addDoc(collection(db, "articles"), {
      title,
      content,
      imageUrl: downloadURL,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json(
      { success: true, imageUrl: downloadURL },
      { status: 201 }
    );
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Error desconocido";
    console.error("Error al subir artículo:", error);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
