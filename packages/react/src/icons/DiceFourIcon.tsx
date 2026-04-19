import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="8" className="draw-line"/><circle cx="100" cy="100" r="8" fill="currentColor"/><circle cx="156" cy="100" r="8" fill="currentColor"/><circle cx="100" cy="156" r="8" fill="currentColor"/><circle cx="156" cy="156" r="8" fill="currentColor"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="12" className="draw-line"/><circle cx="100" cy="100" r="10" fill="currentColor"/><circle cx="156" cy="100" r="10" fill="currentColor"/><circle cx="100" cy="156" r="10" fill="currentColor"/><circle cx="156" cy="156" r="10" fill="currentColor"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="16" className="draw-line"/><circle cx="100" cy="100" r="12" fill="currentColor"/><circle cx="156" cy="100" r="12" fill="currentColor"/><circle cx="100" cy="156" r="12" fill="currentColor"/><circle cx="156" cy="156" r="12" fill="currentColor"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="24" className="draw-line"/><circle cx="96" cy="96" r="16" fill="currentColor"/><circle cx="160" cy="96" r="16" fill="currentColor"/><circle cx="96" cy="160" r="16" fill="currentColor"/><circle cx="160" cy="160" r="16" fill="currentColor"/></>,
  fill: <><path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM100,168a12,12,0,1,1,12-12A12,12,0,0,1,100,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,100,112Zm56,56a12,12,0,1,1,12-12A12,12,0,0,1,156,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,156,112Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="16" className="draw-line"/><circle cx="100" cy="100" r="12" fill="currentColor"/><circle cx="156" cy="100" r="12" fill="currentColor"/><circle cx="100" cy="156" r="12" fill="currentColor"/><circle cx="156" cy="156" r="12" fill="currentColor"/></>,
};

export const DiceFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
