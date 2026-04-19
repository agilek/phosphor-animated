import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144h32a28,28,0,0,0,0-56H104v80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144h32a28,28,0,0,0,0-56H104v80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144h32a28,28,0,0,0,0-56H104v80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144h32a28,28,0,0,0,0-56H104v80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M156,116a20,20,0,0,1-20,20H112V96h24A20,20,0,0,1,156,116Zm76,12A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-60-12a36,36,0,0,0-36-36H104a8,8,0,0,0-8,8v80a8,8,0,0,0,16,0V152h24A36,36,0,0,0,172,116Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144h32a28,28,0,0,0,0-56H104v80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const LetterCirclePIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
