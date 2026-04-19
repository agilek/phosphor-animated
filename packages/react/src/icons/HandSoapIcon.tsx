import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,104V88a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,40a16,16,0,0,0-16-16H104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,104V88a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,40a16,16,0,0,0-16-16H104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,104V88a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,40a16,16,0,0,0-16-16H104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M80,108h96a32,32,0,0,1,32,32v76a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V140A32,32,0,0,1,80,108Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,108V92a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,40a16,16,0,0,0-16-16H104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,104V88a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,40a16,16,0,0,0-16-16H104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const HandSoapIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
