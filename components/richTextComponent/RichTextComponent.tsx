import Image from "next/image";
import Link from "next/link";
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
import imageUrlBuilder from "@sanity/image-url";
import clientConfig from "@/sanity/config/client.config";

const builder = imageUrlBuilder({ clientConfig });

function urlFor(source: string) {
  return builder.image(source);
}

export const RichTextComponents = {
  types: {
    image: ({ value, isInline }: any) => {
      const imageUrl = value?.url;
      return (
        <RichTextImageContainer>
          <Image
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={isInline ? 200 : undefined}
            height={isInline ? 200 : undefined}
            fill={isInline ? false : true}
          />
        </RichTextImageContainer>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ULStyle> {children}</ULStyle>;
    },
    number: ({ children }: any) => {
      return <OLStyle> {children}</OLStyle>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      return <H1Style>{children}</H1Style>;
    },
    h2: ({ children }: any) => {
      return <H2Style>{children}</H2Style>;
    },
    h3: ({ children }: any) => {
      return <H3Style>{children}</H3Style>;
    },
    h4: ({ children }: any) => {
      return <H4Style>{children}</H4Style>;
    },
    h5: ({ children }: any) => {
      return <H5Style>{children}</H5Style>;
    },
    h6: ({ children }: any) => {
      return <H6Style>{children}</H6Style>;
    },
    blockquote: ({ children }: any) => {
      return <BlockQuote>{children}</BlockQuote>;
    },
    normal: ({ children }: any) => {
      return <P>{children}</P>;
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer" : undefined;

      return (
        <RichTextLinks>
          <Link href={value.href} rel={rel}>
            {children}
          </Link>
        </RichTextLinks>
      );
    },
    code: ({ children }: any) => {
      return <CodeStyle>{children}</CodeStyle>;
    },
  },
};
