import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M96,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M96,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M96,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96.44,156c2.54,11.35,15.7,20,31.56,20,17.67,0,32-10.75,32-24,0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M96,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StripeLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
