import { useMemo, useState } from 'react';
import type { IconWeight } from '@agilek/phosphor-animated';
import { ICONS } from './manifest';
import { Toolbar } from './Toolbar';
import { IconGrid } from './IconGrid';

export const App = () => {
  const [query, setQuery] = useState('');
  const [weight, setWeight] = useState<IconWeight>('regular');
  const [color, setColor] = useState('#222222');
  const [toast, setToast] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return ICONS;
    return ICONS.filter(
      (i) => i.name.includes(q) || i.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [query]);

  const handleCopy = async (pascalName: string) => {
    const snippet = `import { ${pascalName}Icon } from '@agilek/phosphor-animated';`;
    try {
      await navigator.clipboard.writeText(snippet);
      setToast(`Copied: ${pascalName}Icon`);
      setTimeout(() => setToast(null), 1500);
    } catch {
      setToast('Copy failed');
      setTimeout(() => setToast(null), 1500);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif' }}>
      <Toolbar
        query={query} onQueryChange={setQuery}
        weight={weight} onWeightChange={setWeight}
        color={color} onColorChange={setColor}
      />
      <div style={{ padding: '8px 16px', fontSize: 12, color: '#888' }}>
        {filtered.length} of {ICONS.length} icons
      </div>
      <IconGrid icons={filtered} weight={weight} color={color} onCopy={handleCopy} />
      {toast && (
        <div style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: '#222', color: '#fff', padding: '10px 16px', borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)', fontSize: 14,
        }}>
          {toast}
        </div>
      )}
    </div>
  );
};
