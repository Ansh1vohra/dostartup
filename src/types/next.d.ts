import "next";

declare module "next" {
  export type PageProps = {
    params: { slug: string };
  };
}