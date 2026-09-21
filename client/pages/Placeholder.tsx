interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-2 p-8 text-center">
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      <p className="max-w-md text-sm text-slate-500">
        This page is a placeholder. Keep prompting to describe what you'd
        like to see here and it will be built out.
      </p>
    </div>
  );
}
