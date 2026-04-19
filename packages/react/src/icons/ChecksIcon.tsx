import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="16 130.29 54.4 168 144 80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="16 130.29 54.4 168 144 80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="16 130.29 54.4 168 144 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="16 130.29 54.4 168 144 80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="134.11 152 150.4 168 240 80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM72,168a8,8,0,0,1-5.66-2.34l-24-24a8,8,0,0,1,11.32-11.32L72,148.69l58.34-58.35a8,8,0,0,1,11.32,11.32l-64,64A8,8,0,0,1,72,168Zm141.66-66.34-64,64a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L144,148.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><rect x="16" y="48" width="224" height="160" rx="16" opacity="0.2" fill="currentColor"/><polyline points="16 130.29 54.4 168 144 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="125.96 144 150.4 168 240 80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ChecksIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
