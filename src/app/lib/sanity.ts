import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

export interface BioContent {
  description?: string | null;
  image?: {
    _type: "image";
    asset?: { _ref: string };
  } | null;
}

export async function getBio(): Promise<BioContent | null> {
  if (!projectId) return null;
  const data = await client.fetch<BioContent | null>(
    `*[_type == "bio"][0]{ description, image }`
  );
  return data;
}

export interface ContactContent {
  email?: string | null;
  instagram?: string | null;
  other?: string | null;
}



export interface SanityImage {
  _type: "image";
  asset?: { _ref: string };
}

export interface ObraImagem {
  titulo?: string | null;
  imagem?: SanityImage | null;
  tecnica?: string | null;
  ano?: number | null;
  dimensoes?: string | null;
}

export interface Obra {
  nome?: string | null;
  descricao?: string | null;
  fotoDeCapa?: SanityImage | null;
  imagens?: ObraImagem[] | null;
}

export interface Linguagens {
  _id: string;
  nome?: string | null;
  fotoDeCapa?: SanityImage | null;
  obras?: Obra[] | null;
}

const linguagensProjection = `{
  _id,
  nome,
  "fotoDeCapa": fotoDeCapa,
  obras[]{
    nome,
    descricao,
    "fotoDeCapa": fotoDeCapa,
    imagens[]{
      titulo,
      "imagem": imagem,
      tecnica,
      ano,
      dimensoes
    }
  }
}`;

export async function getLinguagens(): Promise<Linguagens[]> {
  if (!projectId) return [];
  const data = await client.fetch<Linguagens[]>(
    `*[_type == "linguagens"]${linguagensProjection}`
  );
  return data ?? [];
}

export async function getLinguagemById(
  linguagemId: string
): Promise<Linguagens | null> {
  if (!projectId) return null;
  const data = await client.fetch<Linguagens | null>(
    `*[_type == "linguagens" && _id == $linguagemId][0]${linguagensProjection}`,
    { linguagemId }
  );
  return data;
}
