import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 136 112 160 168 104" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="88 136 112 160 168 104" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="88 136 112 160 168 104" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="88 136 112 160 168 104" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-34.34,77.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><polyline points="88 136 112 160 168 104" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const CheckSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
