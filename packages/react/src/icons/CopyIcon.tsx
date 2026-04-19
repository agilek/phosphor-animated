import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 168 216 168 216 40 88 40 88 88" strokeWidth="8" className="draw-line"/><rect x="40" y="88" width="128" height="128" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="168 168 216 168 216 40 88 40 88 88" strokeWidth="12" className="draw-line"/><rect x="40" y="88" width="128" height="128" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="168 168 216 168 216 40 88 40 88 88" strokeWidth="16" className="draw-line"/><rect x="40" y="88" width="128" height="128" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="168 168 216 168 216 40 88 40 88 88" strokeWidth="24" className="draw-line"/><rect x="40" y="88" width="128" height="128" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z" fill="currentColor"/></>,
  duotone: <><polygon points="88 40 88 88 168 88 168 168 216 168 216 40 88 40" opacity="0.2" fill="currentColor"/><polyline points="168 168 216 168 216 40 88 40 88 88" strokeWidth="16" className="draw-line"/><rect x="40" y="88" width="128" height="128" strokeWidth="16" className="draw-line"/></>,
};

export const CopyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
