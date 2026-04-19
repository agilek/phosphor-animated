import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M40,140V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H140" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CheckSquareOffsetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
