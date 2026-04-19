import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="144" width="176" height="64" rx="8" strokeWidth="8" className="draw-line"/><rect x="40" y="48" width="176" height="64" rx="8" strokeWidth="8" className="draw-line"/><circle cx="180" cy="176" r="8" fill="currentColor"/><circle cx="180" cy="80" r="8" fill="currentColor"/></>,
  light: <><rect x="40" y="144" width="176" height="64" rx="8" strokeWidth="12" className="draw-line"/><rect x="40" y="48" width="176" height="64" rx="8" strokeWidth="12" className="draw-line"/><circle cx="180" cy="80" r="10" fill="currentColor"/><circle cx="180" cy="176" r="10" fill="currentColor"/></>,
  regular: <><rect x="40" y="144" width="176" height="64" rx="8" strokeWidth="16" className="draw-line"/><rect x="40" y="48" width="176" height="64" rx="8" strokeWidth="16" className="draw-line"/><circle cx="180" cy="80" r="12" fill="currentColor"/><circle cx="180" cy="176" r="12" fill="currentColor"/></>,
  bold: <><rect x="40" y="48" width="176" height="160" rx="8" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><circle cx="176" cy="88" r="16" fill="currentColor"/><circle cx="176" cy="168" r="16" fill="currentColor"/></>,
  fill: <><path d="M208,40H48A16,16,0,0,0,32,56v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40ZM180,92a12,12,0,1,1,12-12A12,12,0,0,1,180,92Z" fill="currentColor"/><path d="M208,136H48a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V152A16,16,0,0,0,208,136Zm-28,52a12,12,0,1,1,12-12A12,12,0,0,1,180,188Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="144" width="176" height="64" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="48" width="176" height="64" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="144" width="176" height="64" rx="8" strokeWidth="16" className="draw-line"/><rect x="40" y="48" width="176" height="64" rx="8" strokeWidth="16" className="draw-line"/><circle cx="180" cy="80" r="12" fill="currentColor"/><circle cx="180" cy="176" r="12" fill="currentColor"/></>,
};

export const HardDrivesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
