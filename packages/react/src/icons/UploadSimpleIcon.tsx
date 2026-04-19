import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="88 72 128 32 168 72" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="88 72 128 32 168 72" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="88 72 128 32 168 72" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="88 72 128 32 168 72" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM88,80h32v64a8,8,0,0,0,16,0V80h32a8,8,0,0,0,5.66-13.66l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,88,80Z" fill="currentColor"/></>,
  duotone: <><path d="M56,32H200a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A16,16,0,0,1,56,32Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polyline points="88 72 128 32 168 72" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const UploadSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
