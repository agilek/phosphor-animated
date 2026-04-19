import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="88" y="40" width="80" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="88" y="40" width="80" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="88" y="40" width="80" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="88" y="40" width="80" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M216,128a8,8,0,0,1-8,8H176v72a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16V136H48a8,8,0,0,1,0-16H80V48A16,16,0,0,1,96,32h64a16,16,0,0,1,16,16v72h32A8,8,0,0,1,216,128Z" fill="currentColor"/></>,
  duotone: <><rect x="88" y="40" width="80" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="88" y="40" width="80" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const AlignCenterVerticalSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
