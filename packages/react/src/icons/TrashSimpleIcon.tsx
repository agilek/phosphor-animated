import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TrashSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
