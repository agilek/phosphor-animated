import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="60" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,204V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V204" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SuitcaseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
