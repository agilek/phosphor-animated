import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="16" y="64" width="224" height="128" rx="64" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="16" y="64" width="224" height="128" rx="64" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="16" y="64" width="224" height="128" rx="64" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="16" y="64" width="224" height="128" rx="64" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="28" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144ZM80,168a40,40,0,1,1,40-40A40,40,0,0,1,80,168Z" fill="currentColor"/></>,
  duotone: <><circle cx="80" cy="128" r="32" opacity="0.2" fill="currentColor"/><rect x="16" y="64" width="224" height="128" rx="64" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="80" cy="128" r="32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ToggleLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
