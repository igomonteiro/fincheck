import { Preview } from '../components/Preview';

export default function OnboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 p-8 md:gap-[172px]">
      <div className="flex-1 md:ml-[108px]">{children}</div>
      <div className="hidden md:block">
        <Preview />
      </div>
    </div>
  );
}
