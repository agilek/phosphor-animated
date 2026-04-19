import type { IconWeight } from '@agilek/phosphor-animated';

const WEIGHTS: IconWeight[] = ['thin', 'light', 'regular', 'bold', 'fill', 'duotone'];

interface ToolbarProps {
  query: string;
  onQueryChange: (q: string) => void;
  weight: IconWeight;
  onWeightChange: (w: IconWeight) => void;
  color: string;
  onColorChange: (c: string) => void;
}

export const Toolbar = ({ query, onQueryChange, weight, onWeightChange, color, onColorChange }: ToolbarProps) => (
  <div style={{
    position: 'sticky', top: 0, zIndex: 10, background: '#fff', padding: 16,
    borderBottom: '1px solid #eee', display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap',
  }}>
    <input
      type="search"
      placeholder="Search icons…"
      value={query}
      onChange={(e) => onQueryChange(e.target.value)}
      style={{ padding: 8, fontSize: 14, minWidth: 240 }}
    />
    <div style={{ display: 'flex', gap: 4 }}>
      {WEIGHTS.map((w) => (
        <button
          key={w}
          onClick={() => onWeightChange(w)}
          style={{
            padding: '6px 12px',
            background: w === weight ? '#333' : '#f5f5f5',
            color: w === weight ? '#fff' : '#333',
            border: '1px solid #ddd', borderRadius: 4, cursor: 'pointer',
          }}
        >
          {w}
        </button>
      ))}
    </div>
    <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      Color
      <input type="color" value={color} onChange={(e) => onColorChange(e.target.value)} />
    </label>
  </div>
);
