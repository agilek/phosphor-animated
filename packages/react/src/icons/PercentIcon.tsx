import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="76" cy="76" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="180" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="76" cy="76" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="180" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="76" cy="76" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="180" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="76" cy="76" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="180" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="76" cy="76" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="180" cy="180" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PercentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
