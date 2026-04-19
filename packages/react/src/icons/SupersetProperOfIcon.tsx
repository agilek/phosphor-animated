import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M64,208h72a80,80,0,0,0,0-160H64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M64,208h72a80,80,0,0,0,0-160H64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M64,208h72a80,80,0,0,0,0-160H64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M64,208h72a80,80,0,0,0,0-160H64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M64,208h72a80,80,0,0,0,0-160H64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const SupersetProperOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
