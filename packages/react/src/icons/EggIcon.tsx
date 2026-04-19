import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const EggIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
