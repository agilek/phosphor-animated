import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168c0,17.67,20,24,32,24s32-6.33,32-24L56,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,136c0,17.67,20,24,32,24s32-6.33,32-24L200,56Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168c0,17.67,20,24,32,24s32-6.33,32-24L56,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,136c0,17.67,20,24,32,24s32-6.33,32-24L200,56Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168c0,17.67,20,24,32,24s32-6.33,32-24L56,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,136c0,17.67,20,24,32,24s32-6.33,32-24L200,56Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168c0,17.67,20,24,32,24s32-6.33,32-24L56,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,136c0,17.67,20,24,32,24s32-6.33,32-24L200,56Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M24,168c0,17.67,20,24,32,24s32-6.33,32-24L56,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M168,136c0,17.67,20,24,32,24s32-6.33,32-24L200,56Z" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const ScalesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
