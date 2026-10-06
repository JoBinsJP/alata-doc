'use client';

import { ChevronDown, CodeXml, ExternalLink, FileText } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from 'fumadocs-ui/components/ui/popover';

export function PageOptions({ markdownUrl, githubUrl, pageUrl }: {
  markdownUrl: string;
  githubUrl: string;
  pageUrl: string;
}) {
  const q = `Read ${pageUrl}, I want to ask questions about it.`;
  const assistants = [
    { name: 'ChatGPT', href: `https://chatgpt.com/?${new URLSearchParams({ hints: 'search', q })}` },
    { name: 'Claude', href: `https://claude.ai/new?${new URLSearchParams({ q })}` },
    { name: 'Cursor', href: `https://cursor.com/link/prompt?${new URLSearchParams({ text: q })}` },
    { name: 'Scira AI', href: `https://scira.ai/?${new URLSearchParams({ q })}` },
  ];

  return (
    <Popover>
      <PopoverTrigger className="docs-action">
        Open <ChevronDown size={14} aria-hidden="true" />
      </PopoverTrigger>
      <PopoverContent className="docs-options" align="start">
        <a href={githubUrl} target="_blank" rel="noreferrer">
          <CodeXml size={16} aria-hidden="true" /> View source on GitHub
        </a>
        <a href={markdownUrl} target="_blank" rel="noreferrer">
          <FileText size={16} aria-hidden="true" /> View as Markdown
        </a>
        <p>Ask about this page</p>
        {assistants.map(({ name, href }) => (
          <a key={name} href={href} target="_blank" rel="noreferrer">
            {name}<ExternalLink size={13} className="ms-auto" aria-hidden="true" />
          </a>
        ))}
      </PopoverContent>
    </Popover>
  );
}
