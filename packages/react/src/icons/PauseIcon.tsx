import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="152" y="40" width="56" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><rect x="48" y="40" width="56" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="152" y="40" width="56" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><rect x="48" y="40" width="56" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="152" y="40" width="56" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="48" y="40" width="56" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="152" y="40" width="56" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><rect x="48" y="40" width="56" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z" fill="currentColor"/></>,
  duotone: <><rect x="152" y="40" width="56" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="48" y="40" width="56" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="152" y="40" width="56" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="48" y="40" width="56" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const PauseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
