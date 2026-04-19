import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M156,168H132.53l-14.4,24H144a8,8,0,0,1,6.86,12.12l-24,40a8,8,0,0,1-13.72-8.24L129.87,208H104a8,8,0,0,1-6.86-12.12L113.87,168h-37C48.12,168,24.2,145.07,24,116.36A52.09,52.09,0,0,1,61.35,66.1a4,4,0,0,1,5,4.78A92.48,92.48,0,0,0,64,87.39,8.14,8.14,0,0,0,71.41,96l.6,0a8.18,8.18,0,0,0,8.08-7.72A76,76,0,1,1,156,168Z" fill="currentColor"/></>,
  duotone: <><path d="M156,24A68.16,68.16,0,0,0,90.19,74.45v-.11A44,44,0,1,0,76,160h80a68,68,0,0,0,0-136Z" opacity="0.2" fill="currentColor"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="120 240 144 200 104 200 128 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CloudLightningIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
