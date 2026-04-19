import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="96" y="96" width="64" height="64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StopCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
