import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="120.15 62.99 160 32 160 106.83" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M160,154.4V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H99.64" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="120.15 62.99 160 32 160 106.83" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M160,154.4V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H99.64" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="120.15 62.99 160 32 160 106.83" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M160,154.4V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H99.64" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M160,154.4V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H99.64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="126.48 58.07 160 32 160 94.94" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="120.15 62.99 160 32 160 106.83" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><path d="M160,154.4V224L88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H99.64" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const SpeakerSimpleSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
