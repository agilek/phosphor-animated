import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import type { IconWeight } from '@agilek/phosphor-animated';
import type { IconEntry } from './manifest';

const COLS = 8;
const ROW_HEIGHT = 96;
const ICON_SIZE = 48;

interface IconGridProps {
  icons: IconEntry[];
  weight: IconWeight;
  color: string;
  onCopy: (pascalName: string) => void;
}

export const IconGrid = ({ icons, weight, color, onCopy }: IconGridProps) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowCount = Math.ceil(icons.length / COLS);
  const rowVirtualizer = useVirtualizer({
    count: rowCount,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 4,
  });

  return (
    <div ref={parentRef} style={{ height: 'calc(100vh - 120px)', overflow: 'auto', color }}>
      <div style={{ height: rowVirtualizer.getTotalSize(), position: 'relative' }}>
        {rowVirtualizer.getVirtualItems().map((vRow) => {
          const rowStart = vRow.index * COLS;
          const rowIcons = icons.slice(rowStart, rowStart + COLS);
          return (
            <div
              key={vRow.key}
              style={{
                position: 'absolute', top: 0, left: 0, width: '100%',
                transform: `translateY(${vRow.start}px)`,
                display: 'grid', gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: 8,
                padding: '0 16px',
              }}
            >
              {rowIcons.map(({ name, pascalName, component: Icon }) => (
                <button
                  key={name}
                  onClick={() => onCopy(pascalName)}
                  title={name}
                  className="icon-tile"
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: 4, padding: 8, background: 'transparent', border: '1px solid transparent',
                    cursor: 'pointer', color: 'inherit',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ddd'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
                >
                  <Icon weight={weight} size={ICON_SIZE} />
                  <span style={{ fontSize: 11, color: '#666', textAlign: 'center', lineHeight: 1.2 }}>{name}</span>
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
