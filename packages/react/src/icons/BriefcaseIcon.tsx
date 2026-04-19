import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="60" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,60V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,114.31A191.09,191.09,0,0,1,128,140a191.14,191.14,0,0,1-96-25.68" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="64" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,64V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M224,118.31A191.09,191.09,0,0,1,128,144a191.14,191.14,0,0,1-96-25.68" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BriefcaseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
