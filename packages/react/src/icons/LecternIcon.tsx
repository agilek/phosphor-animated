import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M24,136a8,8,0,0,1-7.16-11.58l40-80A8,8,0,0,1,64,40H192a8,8,0,0,1,7.16,4.42l40,80A8,8,0,0,1,232,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M24,136a8,8,0,0,1-7.16-11.58l40-80A8,8,0,0,1,64,40H192a8,8,0,0,1,7.16,4.42l40,80A8,8,0,0,1,232,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M24,136a8,8,0,0,1-7.16-11.58l40-80A8,8,0,0,1,64,40H192a8,8,0,0,1,7.16,4.42l40,80A8,8,0,0,1,232,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M24,136a8,8,0,0,1-7.16-11.58l40-80A8,8,0,0,1,64,40H192a8,8,0,0,1,7.16,4.42l40,80A8,8,0,0,1,232,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M24,136a8,8,0,0,1-7.16-11.58l40-80A8,8,0,0,1,64,40H192a8,8,0,0,1,7.16,4.42l40,80A8,8,0,0,1,232,136Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const LecternIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
