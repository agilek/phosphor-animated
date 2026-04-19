import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="44" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="64" y="40" width="128" height="200" rx="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BatteryVerticalEmptyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
