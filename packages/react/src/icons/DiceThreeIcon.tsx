import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="92" r="8" fill="currentColor"/><circle cx="128" cy="128" r="8" fill="currentColor"/><circle cx="164" cy="164" r="8" fill="currentColor"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="92" r="10" fill="currentColor"/><circle cx="128" cy="128" r="10" fill="currentColor"/><circle cx="164" cy="164" r="10" fill="currentColor"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="92" r="12" fill="currentColor"/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="164" cy="164" r="12" fill="currentColor"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="88" cy="88" r="16" fill="currentColor"/><circle cx="128" cy="128" r="16" fill="currentColor"/><circle cx="168" cy="168" r="16" fill="currentColor"/></>,
  fill: <><path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32ZM92,104a12,12,0,1,1,12-12A12,12,0,0,1,92,104Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm36,36a12,12,0,1,1,12-12A12,12,0,0,1,164,176Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="92" r="12" fill="currentColor"/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="164" cy="164" r="12" fill="currentColor"/></>,
};

export const DiceThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
