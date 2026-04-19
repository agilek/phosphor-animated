import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M144,176h24a48,48,0,0,0,0-96H144Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M144,176h24a48,48,0,0,0,0-96H144Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M144,176h24a48,48,0,0,0,0-96H144Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M148,176h24a48,48,0,0,0,0-96H148Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M44,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M144,176h20a48,48,0,0,0,0-96H144Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,152c0,13.25,14.33,24,32,24s32-10.75,32-24c0-32-62.22-20-62.22-48,0-13.25,12.55-24,30.22-24,13.25,0,23.63,6,28,14.66" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const StandardDefinitionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
