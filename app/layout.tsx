import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Arulvinayak Menon | Staff Systems Engineer @ Oracle | Distributed Systems & Full Stack</title>
        <meta name="description" content="Portfolio of Arulvinayak Menon, a Staff-level Systems Engineer specializing in high-concurrency backends, distributed cloud platforms, and AI-integrated diagnostics. Currently engineering resilient systems at Oracle." />
        <meta name="keywords" content="Arulvinayak Menon, Systems Engineer, Oracle, Software Engineer, Full Stack, Distributed Systems, Java, Spring Boot, React, Kafka, OCI, GenAI, Portfolio" />
        <meta name="author" content="Arulvinayak Menon" />
        <script src="https://cdn.tailwindcss.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=JetBrains+Mono:wght@400;700&family=Outfit:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
