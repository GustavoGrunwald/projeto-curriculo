import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import { HomeStyle } from "./styles/homeStyle";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Fira+Code:wght@300..700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className="bg-gray-900 text-white antialiased selection:bg-cyan-500/30"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="font-sans min-h-screen bg-gray-900 text-white overflow-x-hidden">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "Ocorreu um erro inesperado.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "A página que você está procurando não existe ou foi movida."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-950 text-center select-none">
      <h1 className={`${HomeStyle.tituloPrincipalConteudo} mb-2`}>
        {`/>_${message}`}
        <span className={HomeStyle.cursorPisca}>_</span>
      </h1>
      <div className="max-w-2xl mt-6 p-6 border-l border-gray-700 bg-gray-950/40 rounded-r-lg text-left font-fira">
        <span className={HomeStyle.codigosResumoProfissional}>
          {"public class "}
        </span>
        <span className={HomeStyle.tituloResumoProfissional}>
          {"ApplicationException"}
        </span>
        <span className={HomeStyle.codigosResumoProfissional}>
          {" {\n  // "}
        </span>
        <span className="text-red-400 font-bold">{details}</span>
        <span className={HomeStyle.codigosResumoProfissional}>{"\n}"}</span>
      </div>

      <a
        href="/"
        className={`${HomeStyle.linkSideBar} mt-10 text-xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300`}
      >
        [ Voltar para a Home ]
      </a>

      {stack && (
        <div className="w-full max-w-3xl mt-12 text-left">
          <p className="text-xs text-gray-500 font-fira mb-2">
            // Stack Trace (Apenas Dev):
          </p>
          <pre className="p-4 bg-gray-950 border border-gray-800 text-red-400/90 rounded-lg overflow-x-auto text-sm font-fira whitespace-pre">
            <code>{stack}</code>
          </pre>
        </div>
      )}
    </main>
  );
}
