import Image from "next/image";
import {
  BlockQuote,
  CodeStyle,
  H1Style,
  H2Style,
  H3Style,
  H4Style,
  H5Style,
  H6Style,
  OLStyle,
  P,
  RichTextImageContainer,
  RichTextLinks,
  ULStyle,
} from "./richText.style";
import { PortableTextComponents } from "@portabletext/react";
import { imageSource } from "@/sanity/config/client.config";

export const RichTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <RichTextImageContainer>
          <Image
            src={imageSource(value).url()}
            alt="illustration image, refresh page if image is not loaded"
            fill
          />
        </RichTextImageContainer>
      );
    },
  },
  list: {
    bullet: ({ children }) => {
      return <ULStyle> {children}</ULStyle>;
    },
    number: ({ children }) => {
      return <OLStyle> {children}</OLStyle>;
    },
  },
  block: {
    h1: ({ children }) => {
      return <H1Style>{children}</H1Style>;
    },
    h2: ({ children }) => {
      return <H2Style>{children}</H2Style>;
    },
    h3: ({ children }) => {
      return <H3Style>{children}</H3Style>;
    },
    h4: ({ children }) => {
      return <H4Style>{children}</H4Style>;
    },
    h5: ({ children }) => {
      return <H5Style>{children}</H5Style>;
    },
    h6: ({ children }) => {
      return <H6Style>{children}</H6Style>;
    },
    blockquote: ({ children }) => {
      return <BlockQuote>{children}</BlockQuote>;
    },
    normal: ({ children }) => {
      return <P>{children}</P>;
    },
  },
  marks: {
    link: ({ children, value }) => {
      return (
        <RichTextLinks href={value.href} passHref>
          {children}
        </RichTextLinks>
      );
    },
    code: ({ children }) => {
      return <CodeStyle>{children}</CodeStyle>;
    },
  },
};
