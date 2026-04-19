import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="24" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><circle cx="128" cy="128" r="24" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><circle cx="128" cy="128" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><circle cx="128" cy="128" r="20" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="24" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="24" strokeMiterlimit="10" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const DotOutlineIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
