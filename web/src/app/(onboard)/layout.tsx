import { Preview } from '../components/Preview';

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-2 p-8">
      <div className="flex-1">{children}</div>
      <Preview />
    </div>
  );
}
