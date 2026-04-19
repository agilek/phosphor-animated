import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M64,208h72a80,80,0,0,0,0-160H64" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M64,208h72a80,80,0,0,0,0-160H64" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M64,208h72a80,80,0,0,0,0-160H64" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M64,208h72a80,80,0,0,0,0-160H64" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,192H80a8,8,0,0,1,0-16h48a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h48a64,64,0,0,1,0,128Z" fill="currentColor"/></>,
  duotone: <><path d="M64,208h72a80,80,0,0,0,0-160H64Z" opacity="0.2" fill="currentColor"/><path d="M64,208h72a80,80,0,0,0,0-160H64" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const SupersetProperOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
