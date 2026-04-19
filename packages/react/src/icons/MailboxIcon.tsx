import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 144 160 24 192 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 144 160 24 192 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 144 160 24 192 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 144 168 24 200 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 144 160 24 192 24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176V116a52,52,0,0,0-52-52H76a52,52,0,0,1,52,52v68h96A8,8,0,0,0,232,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M128,224V184H32a8,8,0,0,1-8-8V116A52,52,0,0,1,76,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MailboxIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
