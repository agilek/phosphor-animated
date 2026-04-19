import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,136a64,64,0,0,1,64,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,88A112,112,0,0,1,168,200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,40A160,160,0,0,1,216,200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M56,136a64,64,0,0,1,64,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,88A112,112,0,0,1,168,200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,40A160,160,0,0,1,216,200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M56,136a64,64,0,0,1,64,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,88A112,112,0,0,1,168,200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,40A160,160,0,0,1,216,200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M56,136a64,64,0,0,1,64,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,88A112,112,0,0,1,168,200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M56,40A160,160,0,0,1,216,200" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M56,136a64,64,0,0,1,64,64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,88A112,112,0,0,1,168,200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M216,200A160,160,0,0,0,56,40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const RssIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
