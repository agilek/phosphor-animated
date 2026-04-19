import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="64" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="64" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="64" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="56" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="128" cy="128" rx="64" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const VignetteIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
