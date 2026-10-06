import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { frameworkVersion, releaseUrl } from '@/lib/shared';
import type { Node } from 'fumadocs-core/page-tree';

function textNavigation(nodes: Node[]): Node[] {
  return nodes.map((node) =>
    node.type === 'folder'
      ? {
          ...node,
          icon: undefined,
          index: node.index && { ...node.index, icon: undefined },
          children: textNavigation(node.children),
        }
      : { ...node, icon: undefined },
  );
}

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const tree = source.getPageTree();
  return (
    <DocsLayout
      tree={{ ...tree, children: textNavigation(tree.children) }}
      {...baseOptions()}
      sidebar={{
        banner: (
          <div className="docs-edition">
            <span>Documentation</span>
            <a href={releaseUrl} target="_blank" rel="noreferrer">
              v{frameworkVersion}<span className="sr-only"> release notes</span>
            </a>
          </div>
        ),
        footer: (
          <a className="docs-release-link" href={releaseUrl} target="_blank" rel="noreferrer">
            Release notes <span aria-hidden="true">↗</span>
          </a>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
