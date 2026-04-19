import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M116.6,56H216a8,8,0,0,1,8,8V174.14" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChatSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
