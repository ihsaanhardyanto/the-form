export default function signInRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <main className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
