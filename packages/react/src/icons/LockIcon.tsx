import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="8" className="draw-line"/><circle cx="128" cy="152" r="8" fill="currentColor"/><path d="M88,88V56a40,40,0,0,1,80,0V88" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="12" className="draw-line"/><circle cx="128" cy="152" r="10" fill="currentColor"/><path d="M88,88V56a40,40,0,0,1,80,0V88" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="16" className="draw-line"/><circle cx="128" cy="152" r="12" fill="currentColor"/><path d="M88,88V56a40,40,0,0,1,80,0V88" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="24" className="draw-line"/><circle cx="128" cy="152" r="16" fill="currentColor"/><path d="M88,88V56a40,40,0,0,1,80,0V88" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="88" width="176" height="128" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="88" width="176" height="128" rx="8" strokeWidth="16" className="draw-line"/><circle cx="128" cy="152" r="12" fill="currentColor"/><path d="M88,88V56a40,40,0,0,1,80,0V88" strokeWidth="16" className="draw-line"/></>,
};

export const LockIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
