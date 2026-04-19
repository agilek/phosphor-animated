import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="56" cy="128" r="48" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="56" cy="128" r="48" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="56" cy="128" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="60" cy="128" r="48" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="196" cy="128" r="48" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M200,72a56,56,0,0,0-39.14,96H95.14A56,56,0,1,0,56,184H200a56,56,0,0,0,0-112ZM56,168a40,40,0,1,1,40-40A40,40,0,0,1,56,168Zm144,0a40,40,0,1,1,40-40A40,40,0,0,1,200,168Zm24-40a24,24,0,1,1-24-24A24,24,0,0,1,224,128ZM80,128a24,24,0,1,1-24-24A24,24,0,0,1,80,128Z" fill="currentColor"/></>,
  duotone: <><circle cx="56" cy="128" r="48" opacity="0.2" fill="currentColor"/><circle cx="200" cy="128" r="48" opacity="0.2" fill="currentColor"/><circle cx="56" cy="128" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const VoicemailIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
