import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="116 92 116 164 68 128 116 92" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="172 92 172 164 124 128 172 92" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="116 92 116 164 68 128 116 92" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="172 92 172 164 124 128 172 92" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="112 92 112 164 64 128 112 92" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="176 92 176 164 128 128 176 92" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M117.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,124,160V96A12,12,0,0,0,117.2,85.18Z" fill="currentColor"/><path d="M173.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,180,160V96A12,12,0,0,0,173.2,85.18Z" fill="currentColor"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,140a8,8,0,0,1-12.8,6.4l-48-36A8,8,0,0,1,120,128v36a8,8,0,0,1-12.8,6.4l-48-36a8,8,0,0,1,0-12.8l48-36A8,8,0,0,1,120,92v36a8,8,0,0,1,3.2-6.4l48-36A8,8,0,0,1,184,92Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32ZM112,164,64,128l48-36Zm64,0-48-36,48-36Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polygon points="112 92 112 164 64 128 112 92" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="176 92 176 164 128 128 176 92" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const RewindCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
