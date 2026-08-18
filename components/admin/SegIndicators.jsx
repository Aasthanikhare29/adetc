import { STAGE_COLORS, STAGE_LABELS } from '@/lib/seo-score';

const SEGMENTS = [
  { key: 's', letter: 'S', name: 'SEO' },
  { key: 'g', letter: 'G', name: 'GEO' },
  { key: 'e', letter: 'E', name: 'AEO' },
];

function Chip({ letter, name, seg }) {
  const color = STAGE_COLORS[seg.stage];
  return (
    <span
      title={`${name}: ${STAGE_LABELS[seg.stage]} (${seg.passed}/${seg.total})`}
      style={{ backgroundColor: `${color}22`, color }}
      className="inline-flex size-5 items-center justify-center rounded-[4px] text-[11px] font-semibold"
    >
      {letter}
    </span>
  );
}

// Single-segment cell (used per table column).
export function SegChip({ which, scores }) {
  const seg = SEGMENTS.find((s) => s.key === which);
  return <Chip letter={seg.letter} name={seg.name} seg={scores[which]} />;
}

// Legend row for the page header.
export function SegLegend() {
  return (
    <div className="flex items-center gap-3 text-xs text-muted-foreground">
      <span>S SEO · G GEO · E AEO</span>
      <span className="flex items-center gap-1">
        {STAGE_COLORS.map((c, i) => (
          <span key={i} title={STAGE_LABELS[i]} className="size-2.5 rounded-full" style={{ backgroundColor: c }} />
        ))}
      </span>
    </div>
  );
}
