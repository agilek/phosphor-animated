import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="68.12" y="74.75" width="167.76" height="90.51" rx="8" transform="translate(-40.33 142.63) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 104 168 104 168 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="60" cy="60" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="68.12" y="74.75" width="167.76" height="90.51" rx="8" transform="translate(-40.33 142.63) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 104 168 104 168 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="60" cy="60" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="68.12" y="74.75" width="167.76" height="90.51" rx="8" transform="translate(-40.33 142.63) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 104 168 104 168 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="60" cy="60" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="68.12" y="74.75" width="167.76" height="90.51" rx="8" transform="translate(-40.33 142.63) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 104 168 104 168 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="60" cy="60" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="68.12" y="74.75" width="167.76" height="90.51" rx="8" transform="translate(-40.33 142.63) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="104 104 168 104 168 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="60" cy="60" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CricketIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
