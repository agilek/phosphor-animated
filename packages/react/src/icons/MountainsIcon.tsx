import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M8,200,81.1,75.94a8,8,0,0,1,13.8,0L168,200Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M146.61,163.71l33.06-55.79a8,8,0,0,1,13.76,0L248,200H168" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M8,200,81.1,75.94a8,8,0,0,1,13.8,0L168,200Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M146.61,163.71l33.06-55.79a8,8,0,0,1,13.76,0L248,200H168" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M8,200,81.1,75.94a8,8,0,0,1,13.8,0L168,200Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M146.61,163.71l33.06-55.79a8,8,0,0,1,13.76,0L248,200H168" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="160" cy="48" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M12,200,85.1,75.94a8,8,0,0,1,13.8,0L172,200Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M146.62,156.94l29-49a8,8,0,0,1,13.76,0L244,200H172" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M8,200,81.1,75.94a8,8,0,0,1,13.8,0L168,200Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M146.61,163.71l33.06-55.79a8,8,0,0,1,13.76,0L248,200H168" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MountainsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
