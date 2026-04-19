import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M88,96a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,82.34" strokeWidth="8" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M88,96a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,82.34" strokeWidth="12" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M88,96a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,82.34" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M92,96a64,64,0,1,1,64,64H76A40,40,0,1,1,93.15,83.85" strokeWidth="24" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M168,232a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h56A8,8,0,0,1,168,232Zm-40-32a8,8,0,0,0-8-8H72a8,8,0,0,0,0,16h48A8,8,0,0,0,128,200Zm56-8H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm47.87-96.45a76,76,0,0,0-151.78.73A8.18,8.18,0,0,1,72,104l-.6,0A8.14,8.14,0,0,1,64,95.39a92.48,92.48,0,0,1,2.33-16.51,4,4,0,0,0-5-4.78A52.09,52.09,0,0,0,24,124.36C24.2,153.07,48.12,176,76.84,176H156A76.08,76.08,0,0,0,231.87,95.55Z" fill="currentColor"/></>,
  duotone: <><path d="M156,32A68.16,68.16,0,0,0,90.19,82.45v-.11A44,44,0,1,0,76,168h80a68,68,0,0,0,0-136Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/><path d="M88,96a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,82.34" strokeWidth="16" className="draw-line" style={{animationDelay:"0.9s"}}/></>,
};

export const CloudFogIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
