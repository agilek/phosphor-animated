import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,108V92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M128,92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,108V92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M128,92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,108V92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M128,92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,108V92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M168,108V92a20,20,0,0,0-40,0v28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,152V120H68a20,20,0,0,0-20,20v12a80,80,0,0,0,160,0V108a20,20,0,0,0-40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const HandGrabbingIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
