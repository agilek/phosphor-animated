import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 152 88 152 144 80 144 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 152 88 152 144 80 144 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 152 88 152 144 80 144 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 152 88 152 144 80 144 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 152 88 152 144 80 144 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NumberSquareFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
