import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M184,120H44a28,28,0,0,0,0,56H192a48,48,0,0,0,0-96H80" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144H72a24,24,0,0,1,0-48h96a8,8,0,0,1,0,16H72a8,8,0,0,0,0,16h96a24,24,0,0,0,0-48H96a8,8,0,0,1,0-16h72a40,40,0,0,1,0,80Z" fill="currentColor"/></>,
  duotone: <><path d="M192,80H80v32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96Z" opacity="0.2" fill="currentColor"/><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const PaperclipHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
