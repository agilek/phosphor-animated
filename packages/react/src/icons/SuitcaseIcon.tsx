import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="60" width="192" height="144" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M168,204V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V204" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,72h64V200H96Zm0-24a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Z" fill="currentColor"/></>,
  duotone: <><path d="M88,64V208H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8Z" opacity="0.2" fill="currentColor"/><path d="M168,64V208h48a8,8,0,0,0,8-8V72a8,8,0,0,0-8-8Z" opacity="0.2" fill="currentColor"/><rect x="32" y="64" width="192" height="144" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M168,208V48a16,16,0,0,0-16-16H104A16,16,0,0,0,88,48V208" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const SuitcaseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
