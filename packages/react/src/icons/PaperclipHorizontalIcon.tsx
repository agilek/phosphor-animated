import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M184,120H44a28,28,0,0,0,0,56H192a48,48,0,0,0,0-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const PaperclipHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
