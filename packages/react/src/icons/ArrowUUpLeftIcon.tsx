import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 136 32 88 80 40" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="80 136 32 88 80 40" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="80 136 32 88 80 40" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="80 136 32 88 80 40" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M232,144a64.07,64.07,0,0,1-64,64H80a8,8,0,0,1,0-16h88a48,48,0,0,0,0-96H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,40V80h80A64.07,64.07,0,0,1,232,144Z" fill="currentColor"/></>,
  duotone: <><polygon points="80 136 32 88 80 40 80 136" opacity="0.2" fill="currentColor"/><polygon points="80 136 32 88 80 40 80 136" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M80,200h88a56,56,0,0,0,56-56h0a56,56,0,0,0-56-56H80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowUUpLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
