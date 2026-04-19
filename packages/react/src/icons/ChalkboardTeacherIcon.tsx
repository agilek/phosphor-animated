import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="104" cy="144" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 176 192 176 192 80 64 80 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="104" cy="144" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 176 192 176 192 80 64 80 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="104" cy="144" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 176 192 176 192 80 64 80 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="104" cy="148" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="188 172 188 84 68 84" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M149.26,208H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H58.73a48,48,0,0,1,90.54,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="104" cy="144" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M53.39,208a56,56,0,0,1,101.22,0H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 176 192 176 192 80 64 80 64 96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChalkboardTeacherIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
