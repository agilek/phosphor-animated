import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M112,139.72a32,32,0,1,1,32,0L160,176H96Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M112,139.72a32,32,0,1,1,32,0L160,176H96Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M112,139.72a32,32,0,1,1,32,0L160,176H96Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M108,137a32,32,0,1,1,40,0l12,39H96Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm29.52,146.39a4,4,0,0,1-3.66,5.61H102.14a4,4,0,0,1-3.66-5.61L112,139.72a32,32,0,1,1,32,0Z" fill="currentColor"/></>,
  duotone: <><path d="M112,139.72a32,32,0,1,1,32,0L160,176H96Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M112,139.72a32,32,0,1,1,32,0L160,176H96Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const KeyholeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
