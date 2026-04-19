import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M224,200v8a32,32,0,0,1-32,32H136" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M224,200v8a32,32,0,0,1-32,32H136" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M224,200v8a32,32,0,0,1-32,32H136" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M224,200v8a32,32,0,0,1-32,32H136" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M232,128v80a40,40,0,0,1-40,40H136a8,8,0,0,1,0-16h56a24,24,0,0,0,24-24H192a24,24,0,0,1-24-24V144a24,24,0,0,1,24-24h23.65A88,88,0,0,0,66,65.54,87.29,87.29,0,0,0,40.36,120H64a24,24,0,0,1,24,24v40a24,24,0,0,1-24,24H48a24,24,0,0,1-24-24V128A104.11,104.11,0,0,1,201.89,54.66,103.41,103.41,0,0,1,232,128Z" fill="currentColor"/></>,
  duotone: <><path d="M32,184a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32Z" opacity="0.2" fill="currentColor"/><path d="M192,128a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128Z" opacity="0.2" fill="currentColor"/><path d="M224,200v8a32,32,0,0,1-32,32H136" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h32V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const HeadsetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
