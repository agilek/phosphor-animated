import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="200 168 128 96 96 128 32 64" strokeWidth="8" className="draw-line"/><polyline points="200 128 200 168 160 168" strokeWidth="8" className="draw-line"/><polyline points="224 208 32 208 32 48" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="200 168 128 96 96 128 32 64" strokeWidth="12" className="draw-line"/><polyline points="200 128 200 168 160 168" strokeWidth="12" className="draw-line"/><polyline points="224 208 32 208 32 48" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="200 168 128 96 96 128 32 64" strokeWidth="16" className="draw-line"/><polyline points="200 128 200 168 160 168" strokeWidth="16" className="draw-line"/><polyline points="224 208 32 208 32 48" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="200 168 128 96 96 128 32 64" strokeWidth="24" className="draw-line"/><polyline points="200 128 200 168 160 168" strokeWidth="24" className="draw-line"/><polyline points="224 208 32 208 32 48" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0V92.69l32,32,34.34-34.35a8,8,0,0,1,11.32,0L176,124.69V104a8,8,0,0,1,16,0v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h20.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0L64,115.31V176H200a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M32,48H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H32a0,0,0,0,1,0,0V48A0,0,0,0,1,32,48Z" opacity="0.2" fill="currentColor"/><polyline points="200 168 128 96 96 128 32 64" strokeWidth="16" className="draw-line"/><polyline points="200 128 200 168 160 168" strokeWidth="16" className="draw-line"/><polyline points="224 208 32 208 32 48" strokeWidth="16" className="draw-line"/></>,
};

export const ChartLineDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
