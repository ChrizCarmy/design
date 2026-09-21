const PLACEHOLDER_CARDS = Array.from({ length: 12 }, (_, i) => i);

function ObjectCard() {
  return (
    <div className="flex min-h-[320px] w-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-bold text-slate-900">
            Object Title Placeholder
          </h3>
          <p className="text-[13px] text-slate-500">
            Short description or subtitle placeholder for quick context.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Status</span>
            <span className="text-xs font-semibold text-slate-600">
              Placeholder
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Category</span>
            <span className="text-xs font-semibold text-slate-600">
              Placeholder
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-slate-400">Date</span>
            <span className="text-xs font-semibold text-slate-600">
              Placeholder
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  return (
    <div className="flex flex-col items-start gap-6 p-4 sm:p-6 lg:p-8">
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-bold text-slate-900">
            Object Library
          </h1>
          <p className="text-sm text-slate-600">
            A structured placeholder grid for objects, assets, and catalog
            entries.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2.5">
          <span className="text-[13px] font-semibold text-slate-900">
            12 Placeholder Cards
          </span>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {PLACEHOLDER_CARDS.map((i) => (
          <ObjectCard key={i} />
        ))}
      </div>
    </div>
  );
}
