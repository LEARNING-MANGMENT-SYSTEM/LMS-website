import { type Components } from 'react-markdown';
import { type ReactNode } from 'react';

// Type definitions for component props
interface ComponentProps {
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}

// Markdown component configurations
export const markdownComponents: Components = {
  // Headings
  h1: ({ children }: ComponentProps) => (
    <h1 className="text-3xl font-bold mb-6 text-slate-900 border-b pb-2">
      {children}
    </h1>
  ),
  
  h2: ({ children }: ComponentProps) => (
    <h2 className="text-2xl font-semibold mb-4 text-slate-900 mt-8">
      {children}
    </h2>
  ),
  
  h3: ({ children }: ComponentProps) => (
    <h3 className="text-xl font-semibold mb-3 text-slate-900 mt-6">
      {children}
    </h3>
  ),
  
  h4: ({ children }: ComponentProps) => (
    <h4 className="text-lg font-semibold mb-2 text-slate-900 mt-4">
      {children}
    </h4>
  ),
  
  h5: ({ children }: ComponentProps) => (
    <h5 className="text-base font-semibold mb-2 text-slate-900 mt-3">
      {children}
    </h5>
  ),
  
  h6: ({ children }: ComponentProps) => (
    <h6 className="text-sm font-semibold mb-2 text-slate-700 mt-2">
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children }: ComponentProps) => (
    <p className="mb-4 text-slate-700 leading-relaxed text-base">
      {children}
    </p>
  ),

  // Lists
  ul: ({ children }: ComponentProps) => (
    <ul className="list-disc ml-6 mb-4 space-y-2 text-slate-700">
      {children}
    </ul>
  ),

  ol: ({ children }: ComponentProps) => (
    <ol className="list-decimal ml-6 mb-4 space-y-2 text-slate-700">
      {children}
    </ol>
  ),

  li: ({ children }: ComponentProps) => (
    <li className="leading-relaxed">
      {children}
    </li>
  ),

  // Text formatting
  strong: ({ children }: ComponentProps) => (
    <strong className="font-semibold text-slate-900">
      {children}
    </strong>
  ),

  em: ({ children }: ComponentProps) => (
    <em className="italic text-slate-700">
      {children}
    </em>
  ),

  // Links
  a: ({ children, href, ...props }: ComponentProps & { href?: string }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  ),

  // Code
  code: ({ children, className }: ComponentProps) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="bg-gray-100 text-slate-800 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      );
    }
    
    return (
      <code className="block bg-gray-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm font-mono mb-4">
        {children}
      </code>
    );
  },

  pre: ({ children }: ComponentProps) => (
    <pre className="bg-gray-900 text-slate-100 p-4 rounded-lg overflow-x-auto mb-4">
      {children}
    </pre>
  ),

  // Blockquotes
  blockquote: ({ children }: ComponentProps) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 ml-4 mb-4 italic text-slate-600 bg-blue-50 py-2">
      {children}
    </blockquote>
  ),

  // Horizontal rule
  hr: () => (
    <hr className="border-0 border-t border-gray-300 my-8" />
  ),

  // Tables
  table: ({ children }: ComponentProps) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-300 rounded-lg">
        {children}
      </table>
    </div>
  ),

  thead: ({ children }: ComponentProps) => (
    <thead className="bg-gray-50">
      {children}
    </thead>
  ),

  tbody: ({ children }: ComponentProps) => (
    <tbody className="divide-y divide-gray-200">
      {children}
    </tbody>
  ),

  tr: ({ children }: ComponentProps) => (
    <tr className="hover:bg-gray-50">
      {children}
    </tr>
  ),

  th: ({ children }: ComponentProps) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-b">
      {children}
    </th>
  ),

  td: ({ children }: ComponentProps) => (
    <td className="px-4 py-3 text-sm text-slate-700">
      {children}
    </td>
  ),

  // Images
  img: ({ src, alt, ...props }: ComponentProps & { src?: string; alt?: string }) => (
    <img
      src={src}
      alt={alt}
      className="max-w-full h-auto rounded-lg mb-4 shadow-sm"
      loading="lazy"
      {...props}
    />
  ),
};

// Alternative component sets for different use cases
export const compactMarkdownComponents: Components = {
  ...markdownComponents,
  p: ({ children }: ComponentProps) => (
    <p className="mb-2 text-slate-700 leading-normal text-sm">
      {children}
    </p>
  ),
  ul: ({ children }: ComponentProps) => (
    <ul className="list-disc ml-4 mb-2 space-y-1 text-slate-700 text-sm">
      {children}
    </ul>
  ),
  ol: ({ children }: ComponentProps) => (
    <ol className="list-decimal ml-4 mb-2 space-y-1 text-slate-700 text-sm">
      {children}
    </ol>
  ),
};

export const largeMarkdownComponents: Components = {
  ...markdownComponents,
  p: ({ children }: ComponentProps) => (
    <p className="mb-6 text-slate-700 leading-relaxed text-lg">
      {children}
    </p>
  ),
  ul: ({ children }: ComponentProps) => (
    <ul className="list-disc ml-8 mb-6 space-y-3 text-slate-700 text-lg">
      {children}
    </ul>
  ),
  ol: ({ children }: ComponentProps) => (
    <ol className="list-decimal ml-8 mb-6 space-y-3 text-slate-700 text-lg">
      {children}
    </ol>
  ),
};

export default markdownComponents;