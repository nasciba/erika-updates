import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getLinguagemById,
  urlFor,
  type Obra,
  type ObraImagem,
} from "../../../lib/sanity";
import {
  ObraDetailWrap,
  ObraBreadcrumb,
  ObraBreadcrumbLink,
  ObraBreadcrumbSep,
  ObraDetailTitle,
  ObraDetailDescription,
  ObrasGrid,
  ObraCardLink,
  ObraCardImageWrap,
  ObraCardTitle,
} from "../../../components/styled/ObraStyles";

interface PageProps {
  params: Promise<{ linguagemId: string; obraIndex: string }>;
}

export default async function ObraDetailPage({ params }: PageProps) {
  const { linguagemId, obraIndex } = await params;
  const linguagem = await getLinguagemById(decodeURIComponent(linguagemId));
  if (!linguagem || !linguagem.obras?.length) notFound();

  const index = parseInt(obraIndex, 10);
  if (Number.isNaN(index) || index < 0 || index >= linguagem.obras.length) {
    notFound();
  }

  const obra: Obra = linguagem.obras[index];
  const imagens = obra.imagens ?? [];

  return (
    <ObraDetailWrap>
      <ObraBreadcrumb aria-label="Navegação">
        <ObraBreadcrumbLink href="/obras">Obras</ObraBreadcrumbLink>
        <ObraBreadcrumbSep aria-hidden>/</ObraBreadcrumbSep>

        <ObraBreadcrumbLink href={`/obras/${linguagemId}`}>
          {linguagem.nome ?? "Linguagens"}
        </ObraBreadcrumbLink>
        <ObraBreadcrumbSep aria-hidden>/</ObraBreadcrumbSep>
        <span>{obra.nome ?? "Obra"}</span>
      </ObraBreadcrumb>

      {imagens.length > 0 && (
        <>
          <ObrasGrid as="div">
            {imagens.map((img: ObraImagem, imageIndex: number) => {
              const imgUrl =
                img.imagem?.asset &&
                urlFor(img.imagem).width(800).height(600).quality(90).url();
              const href = `/obras/${encodeURIComponent(linguagemId)}/${obraIndex}/${imageIndex}`;
              return (
                <ObraCardLink
                  key={imageIndex}
                  href={href}
                  aria-label={img.titulo ?? "Ver imagem"}
                >
                  <ObraCardImageWrap>
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={img.titulo ?? "Imagem"}
                        fill
                        sizes="(max-width: 640px) 50vw, 200px"
                        style={{ objectFit: "cover" }}
                      />
                    ) : null}
                  </ObraCardImageWrap>
                  <ObraCardTitle>
                    {img.titulo ?? `Imagem ${imageIndex + 1}`}
                  </ObraCardTitle>
                </ObraCardLink>
              );
            })}
          </ObrasGrid>
        </>
      )}
    </ObraDetailWrap>
  );
}
