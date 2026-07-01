import { codeToHtml } from "shiki";

const THEME = "github-dark";

const LANGUAGE_ALIASES: Record<string, string> = {
  "c#": "csharp",
  "c++": "cpp",
  "f#": "fsharp",
  "objective-c": "objective-c",
  "plain text": "text",
  shell: "bash",
  docker: "dockerfile",
  "vb.net": "vb",
  markup: "html",
  webassembly: "wasm",
};

const normalizeLanguage = (language?: string) => {
  const lower = (language || "text").toLowerCase();
  return LANGUAGE_ALIASES[lower] ?? lower;
};

/**
 * Renders a code string to syntax-highlighted HTML on the server, using
 * Shiki's TextMate grammars (the same engine VS Code uses). Falls back to
 * plain text if Notion reports a language Shiki doesn't bundle.
 */
export const highlightCode = async (code: string, language?: string) => {
  const lang = normalizeLanguage(language);

  try {
    return await codeToHtml(code, { lang, theme: THEME });
  } catch {
    return await codeToHtml(code, { lang: "text", theme: THEME });
  }
};

/**
 * Recursively walks a Notion block tree and attaches pre-rendered,
 * syntax-highlighted HTML to every "code" block. Highlighting is async
 * (Shiki loads grammars on demand), so this must run during data-fetching
 * (getStaticProps/getServerSideProps) rather than inside a component render.
 */
export const highlightNotionBlocks = async (blocks: any[]): Promise<any[]> => {
  return Promise.all(
    blocks.map(async (block) => {
      if (block.type === "code") {
        const content = block.code?.rich_text?.[0]?.plain_text ?? "";
        const html = await highlightCode(content, block.code?.language);

        return {
          ...block,
          code: {
            ...block.code,
            html,
          },
        };
      }

      const value = block[block.type];
      if (value?.children?.length) {
        return {
          ...block,
          [block.type]: {
            ...value,
            children: await highlightNotionBlocks(value.children),
          },
        };
      }

      return block;
    }),
  );
};
