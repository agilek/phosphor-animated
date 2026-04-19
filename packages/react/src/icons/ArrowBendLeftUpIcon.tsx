import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="152 80 104 32 56 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="152 80 104 32 56 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="152 80 104 32 56 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="152 80 104 32 56 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="152 80 104 32 56 80 152 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,224a96,96,0,0,1-96-96V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowBendLeftUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
