import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="80" cy="104" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M16,192c7.1-27.6,34.18-48,64-48s56.9,20.4,64,48" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><circle cx="80" cy="104" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M16,192c7.1-27.6,34.18-48,64-48s56.9,20.4,64,48" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><circle cx="80" cy="104" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M16,192c7.1-27.6,34.18-48,64-48s56.9,20.4,64,48" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><circle cx="80" cy="104" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M16,192c7.1-27.6,34.18-48,64-48s56.9,20.4,64,48" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="80" cy="104" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M16,192c7.1-27.6,34.18-48,64-48s56.9,20.4,64,48" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const UserListIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
