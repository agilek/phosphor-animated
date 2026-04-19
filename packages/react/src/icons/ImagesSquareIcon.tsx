import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="72" y="40" width="144" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="120" cy="88" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="72" y="40" width="144" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="120" cy="88" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="72" y="40" width="144" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="120" cy="88" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="80" y="40" width="136" height="136" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,176v32a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M108.69,176l65.65-65.66a8,8,0,0,1,11.32,0L216,140.69" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="72" y="40" width="144" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="120" cy="88" r="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ImagesSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
