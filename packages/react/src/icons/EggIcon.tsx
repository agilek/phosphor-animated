import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,152a88,88,0,0,1-176,0c0-30.77,10.7-64.46,29.34-92.44C87.53,32.29,109.46,16,128,16s40.47,16.29,58.66,43.56C205.3,87.54,216,121.23,216,152Z" fill="currentColor"/></>,
  duotone: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" opacity="0.2" fill="currentColor"/><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const EggIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
