import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html lang="en" className="dark">
         <Head />
         <body className="bg-slate-200 text-slate-800 dark:bg-slate-900 dark:text-slate-400">
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
