import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="200" cy="200" r="24" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="200" cy="200" r="24" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="200" cy="200" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="200" cy="200" r="24" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M228,200a28,28,0,0,1-54.83,8H72a48,48,0,0,1,0-96h96a24,24,0,0,0,0-48H72a8,8,0,0,1,0-16h96a40,40,0,0,1,0,80H72a32,32,0,0,0,0,64H173.17A28,28,0,0,1,228,200Z" fill="currentColor"/></>,
  duotone: <><circle cx="200" cy="200" r="24" opacity="0.2" fill="currentColor"/><circle cx="200" cy="200" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M72,56h96a32,32,0,0,1,0,64H72a40,40,0,0,0,0,80H176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const PathIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
