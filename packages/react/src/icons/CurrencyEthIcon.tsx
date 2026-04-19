import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><polyline points="216 128 128 168 40 128" strokeWidth="8" className="draw-line"/><polygon points="128 16 216 128 128 240 40 128 128 16" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><polyline points="216 128 128 168 40 128" strokeWidth="12" className="draw-line"/><polygon points="128 16 216 128 128 240 40 128 128 16" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><polyline points="216 128 128 168 40 128" strokeWidth="16" className="draw-line"/><polygon points="128 16 216 128 128 240 40 128 128 16" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><polyline points="216 128 128 168 40 128" strokeWidth="24" className="draw-line"/><polygon points="128 16 216 128 128 240 40 128 128 16" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M222.29,123.06l-88-112a8,8,0,0,0-12.58,0l-88,112a8,8,0,0,0,0,9.88l88,112a8,8,0,0,0,12.58,0l88-112A8,8,0,0,0,222.29,123.06ZM136,155.58V39.13l67.42,85.8Zm-16,0L52.58,124.93,120,39.13Zm0,17.57v43.72l-53.43-68Z" fill="currentColor"/></>,
  duotone: <><polygon points="40 128 128 240 216 128 128 168 40 128" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><polyline points="216 128 128 168 40 128" strokeWidth="16" className="draw-line"/><polygon points="128 16 216 128 128 240 40 128 128 16" strokeWidth="16" className="draw-line"/></>,
};

export const CurrencyEthIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
