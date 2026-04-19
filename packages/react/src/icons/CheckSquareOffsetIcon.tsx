import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M40,140V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H140" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200a8,8,0,0,1-5.66-2.34l-16-16a8,8,0,0,1,11.32-11.32L80,180.69l34.34-34.35a8,8,0,0,1,11.32,11.32l-40,40A8,8,0,0,1,80,200Zm120-8a8,8,0,0,1-8,8H136a8,8,0,0,1,0-16h48V72H72v64a8,8,0,0,1-16,0V64a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8Z" fill="currentColor"/></>,
  duotone: <><path d="M64,216,40,192V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8Z" opacity="0.2" fill="currentColor"/><path d="M40,144V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V208a8,8,0,0,1-8,8H136" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="40 192 64 216 120 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CheckSquareOffsetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
