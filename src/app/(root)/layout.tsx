// Minimal root layout for "/" which only redirects to a locale.
export default function RedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
