import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M48,112a32,32,0,0,1,0-64h96a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,48h72a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,111v89a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V111" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M208,111v89a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M48,112a32,32,0,0,1,0-64h96a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,48h72a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,111v89a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V111" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M208,111v89a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M48,112a32,32,0,0,1,0-64h96a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,48h72a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,111v89a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V111" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M208,111v89a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M48,112a32,32,0,0,1,0-64h92a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,48h72a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M148,111v89a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V111" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M208,111v89a8,8,0,0,1-8,8H140" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M48,112a32,32,0,0,1,0-64h96a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,48h72a32,32,0,0,1,0,64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M152,111v89a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V111" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M208,111v89a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BreadIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
