import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><circle cx="64" cy="128" r="32" strokeWidth="8" className="draw-line"/><circle cx="176" cy="200" r="32" strokeWidth="8" className="draw-line"/><circle cx="176" cy="56" r="32" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><circle cx="64" cy="128" r="32" strokeWidth="12" className="draw-line"/><circle cx="176" cy="200" r="32" strokeWidth="12" className="draw-line"/><circle cx="176" cy="56" r="32" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="64" cy="128" r="32" strokeWidth="16" className="draw-line"/><circle cx="176" cy="200" r="32" strokeWidth="16" className="draw-line"/><circle cx="176" cy="56" r="32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><circle cx="64" cy="128" r="32" strokeWidth="24" className="draw-line"/><circle cx="176" cy="200" r="32" strokeWidth="24" className="draw-line"/><circle cx="176" cy="56" r="32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M212,200a36,36,0,1,1-69.85-12.25l-53-34.05a36,36,0,1,1,0-51.4l53-34a36.09,36.09,0,1,1,8.67,13.45l-53,34.05a36,36,0,0,1,0,24.5l53,34.05A36,36,0,0,1,212,200Z" fill="currentColor"/></>,
  duotone: <><circle cx="176" cy="200" r="32" opacity="0.2" fill="currentColor"/><circle cx="176" cy="56" r="32" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><circle cx="64" cy="128" r="32" strokeWidth="16" className="draw-line"/><circle cx="176" cy="200" r="32" strokeWidth="16" className="draw-line"/><circle cx="176" cy="56" r="32" strokeWidth="16" className="draw-line"/></>,
};

export const ShareNetworkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
