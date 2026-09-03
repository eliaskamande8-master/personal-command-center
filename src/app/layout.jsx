import './globals.css';

export const metadata = {
  title: 'Personal Command Center',
  description: 'Manage academic, fitness, financial, and language goals',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}