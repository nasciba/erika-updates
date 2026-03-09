import Image from "next/image";
import { getLinguagens, urlFor } from "../lib/sanity";
import {
  ObrasGrid,
  ObraCardLink,
  ObraCardImageWrap,
  ObraCardTitle,
} from "../components/styled/ObraStyles";

export default async function ObrasPage() {
  const linguagens = await getLinguagens();

  return (
    <div>
      {linguagens?.length === 0 ? (
        <p>Nenhuma linguagem cadastrada.</p>
      ) : (
        <ObrasGrid as="div">
          {linguagens?.map((linguagem) => {
            const coverUrl =
              linguagem.fotoDeCapa?.asset &&
              urlFor(linguagem.fotoDeCapa).width(800).height(600).quality(90).url();
            const href = `/obras/${encodeURIComponent(linguagem._id)}`;
            return (
              <ObraCardLink key={linguagem._id} href={href}>
                <ObraCardImageWrap>
                  {coverUrl ? (
                    <Image
                      src={coverUrl}
                      alt={linguagem.nome ?? "Linguagem"}
                      fill
                      sizes="(max-width: 640px) 50vw, 200px"
                      style={{ objectFit: "cover" }}
                    />
                  ) : null}
                </ObraCardImageWrap>
                <ObraCardTitle>{linguagem.nome ?? "Sem nome"}</ObraCardTitle>
              </ObraCardLink>
            );
          })}
        </ObrasGrid>
      )}
    </div>
  );
}
