import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="72" width="208" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><rect x="24" y="72" width="208" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><rect x="24" y="72" width="208" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><rect x="24" y="76" width="208" height="124" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,76V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V76" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="72" width="208" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const ToolboxIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
