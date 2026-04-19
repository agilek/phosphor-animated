import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="128" rx="36" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><ellipse cx="128" cy="128" rx="36" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><ellipse cx="128" cy="128" rx="36" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><ellipse cx="128" cy="128" rx="36" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="128" cy="128" rx="36" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NumberSquareZeroIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
