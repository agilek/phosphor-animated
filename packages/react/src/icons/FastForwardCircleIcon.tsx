import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><polygon points="140 92 140 164 188 128 140 92" strokeWidth="8" className="draw-line"/><polygon points="84 92 132 128 84 164 84 92" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><polygon points="140 92 140 164 188 128 140 92" strokeWidth="12" className="draw-line"/><polygon points="84 92 132 128 84 164 84 92" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polygon points="144 92 144 164 192 128 144 92" strokeWidth="16" className="draw-line"/><polygon points="80 92 128 128 80 164 80 92" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M191.5,118.63l-40-32A12,12,0,0,0,132,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z" fill="currentColor"/><path d="M135.5,118.63l-40-32A12,12,0,0,0,76,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm68.8,110.4-48,36A8,8,0,0,1,144,172a8,8,0,0,1-8-8V128a8,8,0,0,1-3.2,6.4l-48,36A8,8,0,0,1,80,172a8,8,0,0,1-8-8V92a8,8,0,0,1,12.8-6.4l48,36A8,8,0,0,1,136,128V92a8,8,0,0,1,12.8-6.4l48,36a8,8,0,0,1,0,12.8Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM80,164V92l48,36Zm64,0V92l48,36Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polygon points="144 92 144 164 192 128 144 92" strokeWidth="16" className="draw-line"/><polygon points="80 92 128 128 80 164 80 92" strokeWidth="16" className="draw-line"/></>,
};

export const FastForwardCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
