import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,64V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BriefcaseMetalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
