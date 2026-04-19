import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="40" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="32" width="192" height="192" rx="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="32" width="192" height="192" rx="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="40" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const InstagramLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
