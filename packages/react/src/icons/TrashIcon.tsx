import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const TrashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
