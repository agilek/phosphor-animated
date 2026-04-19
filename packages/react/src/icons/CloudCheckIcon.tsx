import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 136 144 160 192 112" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 136 144 160 192 112" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 136 144 160 192 112" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 136 144 160 192 112" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M247.93,124.52C246.11,77.54,207.07,40,160.06,40A88.1,88.1,0,0,0,81.29,88.67h0A87.48,87.48,0,0,0,72,127.73,8.18,8.18,0,0,1,64.57,136,8,8,0,0,1,56,128a103.66,103.66,0,0,1,5.34-32.92,4,4,0,0,0-4.75-5.18A64.09,64.09,0,0,0,8,152c0,35.19,29.75,64,65,64H160A88.09,88.09,0,0,0,247.93,124.52Zm-50.27-6.86-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L144,148.69l42.34-42.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><path d="M160,48A80,80,0,0,0,85.9,97.84l0-.1A56,56,0,1,0,72,208h88a80,80,0,0,0,0-160Z" opacity="0.2" fill="currentColor"/><path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="120 136 144 160 192 112" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const CloudCheckIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
