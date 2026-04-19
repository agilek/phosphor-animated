import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="160" cy="160" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="160" cy="160" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="160" cy="160" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="160" cy="160" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="96" cy="96" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="160" cy="160" r="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const IntersectIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
