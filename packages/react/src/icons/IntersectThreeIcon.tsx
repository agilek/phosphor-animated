import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="92" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="164" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="92" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="164" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="92" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="164" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="92" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="164" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="92" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="164" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="92" cy="156" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const IntersectThreeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
