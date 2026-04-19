import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M228.92,49.69a8,8,0,0,0-6.86-1.45L160.93,63.52,99.58,32.84a8,8,0,0,0-5.52-.6l-64,16A8,8,0,0,0,24,56V200a8,8,0,0,0,9.94,7.76l61.13-15.28,61.35,30.68A8.15,8.15,0,0,0,160,224a8,8,0,0,0,1.94-.24l64-16A8,8,0,0,0,232,200V56A8,8,0,0,0,228.92,49.69ZM96,176a8,8,0,0,0-1.94.24L40,189.75V62.25L95.07,48.48l.93.46Zm120,17.75-55.07,13.77-.93-.46V80a8,8,0,0,0,1.94-.23L216,66.25Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 184 96 40 160 72 160 216 96 184" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><polygon points="96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const MapTrifoldIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
