import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="96" r="80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="96" r="80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="96" r="80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="96" r="80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="40" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M216,96A88,88,0,1,0,72,163.83V240a8,8,0,0,0,11.58,7.16L128,225l44.43,22.21A8.07,8.07,0,0,0,176,248a8,8,0,0,0,8-8V163.83A87.85,87.85,0,0,0,216,96ZM56,96a72,72,0,1,1,72,72A72.08,72.08,0,0,1,56,96Zm16,0a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="96" r="48" opacity="0.2" fill="currentColor"/><circle cx="128" cy="96" r="80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="96" r="48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 160 176 240 127.99 216 80 240 80 160.01" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MedalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
