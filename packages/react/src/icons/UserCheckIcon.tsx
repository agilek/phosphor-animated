import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="108" cy="100" r="60" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="108" cy="100" r="60" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="108" cy="100" r="60" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="108" cy="100" r="60" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="196 144 212 160 244 128" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M253.66,133.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z" fill="currentColor"/></>,
  duotone: <><circle cx="108" cy="100" r="60" opacity="0.2" fill="currentColor"/><circle cx="108" cy="100" r="60" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M24,200c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="200 144 216 160 248 128" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const UserCheckIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
