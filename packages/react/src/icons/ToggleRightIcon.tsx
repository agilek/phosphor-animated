import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="16" y="64" width="224" height="128" rx="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="16" y="64" width="224" height="128" rx="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="16" y="64" width="224" height="128" rx="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="16" y="64" width="224" height="128" rx="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="128" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="16" y="64" width="224" height="128" rx="64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ToggleRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
