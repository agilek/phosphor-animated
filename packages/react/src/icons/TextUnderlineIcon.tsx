import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,56v80a56,56,0,0,1-112,0V56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,56v80a56,56,0,0,1-112,0V56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,56v80a56,56,0,0,1-112,0V56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,56v72a56,56,0,0,1-112,0V56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,72a8,8,0,0,1,16,0v48a32,32,0,0,0,64,0V72a8,8,0,0,1,16,0v48a48,48,0,0,1-96,0Zm96,128H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M184,56v80a56,56,0,0,1-112,0V56Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,56v80a56,56,0,0,1-112,0V56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TextUnderlineIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
