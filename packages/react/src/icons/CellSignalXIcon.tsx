import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.5s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.8s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.5s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.8s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.5s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.8s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.5s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.8s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M120,208H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40v72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CellSignalXIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
