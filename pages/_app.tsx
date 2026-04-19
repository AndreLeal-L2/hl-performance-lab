import type { AppProps } from 'next/app';
import Head from 'next/head';
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HL Performance Lab | Resultados de Leão, Constância de Pantera</title>
        <meta name="description" content="Treinos personalizados para pessoas que querem mudar de vida com constância, acompanhamento e método certo." />
        <meta name="keywords" content="treino personalizado, performance, fitness, consultoria, hl performance lab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="64x64" href="/logobrowser.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logobrowser.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logobrowser.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logobrowser.png" />
      </Head>
      <div className="relative min-h-screen bg-[#030303]">
        <Component {...pageProps} />
        <div className="film-grain" aria-hidden="true" />
      </div>
    </>
  );
}
