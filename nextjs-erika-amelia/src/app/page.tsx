import {
  SectionsWrap,
  PageSection,
  BackgroundImage,
} from "./components/styled/HomeStyles";

export default function HomePage() {
  return (
    <BackgroundImage>
      <SectionsWrap>
        <PageSection />
      </SectionsWrap>
    </BackgroundImage>
  );
}
