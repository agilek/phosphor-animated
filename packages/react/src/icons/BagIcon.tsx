import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,96V64a40,40,0,0,1,80,0V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,96V64a40,40,0,0,1,80,0V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,96V64a40,40,0,0,1,80,0V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,96V64a40,40,0,0,1,80,0V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="72" width="192" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,96V64a40,40,0,0,1,80,0V96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BagIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
