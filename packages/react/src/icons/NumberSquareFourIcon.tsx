import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,160h-8v16a8,8,0,0,1-16,0V160H88a8,8,0,0,1-6.31-12.91l56-72A8,8,0,0,1,152,80v64h8a8,8,0,0,1,0,16Zm-55.64-16L136,103.32V144Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line"/><polyline points="160 152 88 152 144 80 144 176" strokeWidth="16" className="draw-line"/></>,
};

export const NumberSquareFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
