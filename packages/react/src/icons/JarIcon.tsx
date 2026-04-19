import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="48" y="56" width="160" height="176" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="48" y="56" width="160" height="176" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="48" y="56" width="160" height="176" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="48" y="60" width="160" height="172" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,60V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="48" y="56" width="160" height="176" rx="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,56V32a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const JarIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
