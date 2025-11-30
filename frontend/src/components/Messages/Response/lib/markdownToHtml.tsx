import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeReact from "rehype-react";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import { unified } from "unified";
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import type { ReactNode } from "react";

const components = {
  h1: ({ node, ...props }: any) => <h1 className="mt-6 mb-4 text-2xl font-bold text-foreground" {...props} />,
  h2: ({ node, ...props }: any) => <h2 className="mt-5 mb-3 text-xl font-bold text-foreground" {...props} />,
  h3: ({ node, ...props }: any) => <h3 className="mt-4 mb-2 text-lg font-bold text-foreground" {...props} />,
  p: ({ node, ...props }: any) => <p className="mb-3 text-foreground leading-relaxed" {...props} />,
  ul: ({ node, ...props }: any) => <ul className="mb-3 ml-6 list-disc space-y-1 text-foreground" {...props} />,
  ol: ({ node, ...props }: any) => <ol className="mb-3 ml-6 list-decimal space-y-1 text-foreground" {...props} />,
  li: ({ node, ...props }: any) => <li className="text-foreground" {...props} />,
  code: ({ node, inline, ...props }: any) =>
    inline ? (
      <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground" {...props} />
    ) : (
      <code className="text-foreground" {...props} />
    ),
  pre: ({ node, ...props }: any) => (
    <pre className="mb-3 overflow-x-auto rounded-lg bg-muted p-4 text-sm text-foreground" {...props} />
  ),
  blockquote: ({ node, ...props }: any) => (
    <blockquote className="mb-3 border-l-4 border-primary pl-4 italic text-muted-foreground" {...props} />
  ),
  a: ({ node, ...props }: any) => (
    <a className="text-primary underline hover:text-primary/80" target="_blank" rel="noopener noreferrer" {...props} />
  ),
  table: ({ node, ...props }: any) => (
    <table className="mb-3 border border-border-collapse w-full" {...props} />
  ),
  th: ({ node, ...props }: any) => (
    <th className="border px-2 py-1 text-left font-semibold" {...props} />
  ),
  td: ({ node, ...props }: any) => (
    <td className="border px-2 py-1" {...props} />
  ),
  tr: ({ node, ...props }: any) => <tr {...props} />,
  hr: () => null,
}

export const mdToHtml = (md: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeReact, { components, Fragment, jsx, jsxs });

  return processor.processSync(md).result as ReactNode;
}