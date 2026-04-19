import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="60" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,60V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SuitcaseSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
