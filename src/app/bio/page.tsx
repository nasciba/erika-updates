import Image from "next/image";
import { notFound } from "next/navigation";
import { getBio, urlFor } from "../lib/sanity";
import {
  BioLayout,
  BioImageWrap,
  BioContent,
  BioTitle,
  BioDescription,
} from "../components/styled/BioStyles";

const BIO_PAGE_TITLE = "Sobre";
const BIO_IMAGE_ALT = "Erika Amelia - foto de perfil";

export default async function BioPage() {
  const bio = await getBio();
  if (!bio) notFound();

  const imageUrl =
    bio.image && bio.image.asset
      ? urlFor(bio.image).width(1200).height(1500).quality(90).url()
      : null;

  return (
    <>
      <BioTitle>{BIO_PAGE_TITLE}</BioTitle>
      <BioLayout>
        {imageUrl ? (
          <BioImageWrap>
            <Image
              src={imageUrl}
              alt={BIO_IMAGE_ALT}
              width={800}
              height={1000}
              style={{ width: "100%", height: "auto" }}
            />
          </BioImageWrap>
        ) : null}
        <BioContent>
          <BioDescription>{bio.description ?? ""}</BioDescription>
        </BioContent>
      </BioLayout>
    </>
  );
}
