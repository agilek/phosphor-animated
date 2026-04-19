import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 152 160 112 128 104 172.68 53.93" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 152 160 112 128 104 172.68 53.93" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 152 160 112 128 104 172.68 53.93" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 152 160 112 128 104 172.68 53.93" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M208,152a80,80,0,0,1-160,0C48,88,96,24,128,24S208,88,208,152Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 152 160 112 128 104 172.68 53.93" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const EggCrackIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
