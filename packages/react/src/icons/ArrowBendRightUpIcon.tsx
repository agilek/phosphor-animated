import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 80 152 32 200 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="104 80 152 32 200 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="104 80 152 32 200 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="104 80 152 32 200 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="104 80 152 32 200 80 104 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,224a96,96,0,0,0,96-96V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendRightUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
