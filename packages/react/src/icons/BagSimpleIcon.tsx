import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="72" width="192" height="136" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="72" width="192" height="136" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,72V64a40,40,0,0,1,80,0v8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BagSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
