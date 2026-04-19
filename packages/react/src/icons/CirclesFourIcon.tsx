import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="80" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="80" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="80" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="80" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="80" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="80" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="78" cy="78" r="30" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="178" cy="78" r="30" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="78" cy="178" r="30" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="178" cy="178" r="30" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="80" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="80" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="80" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CirclesFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
