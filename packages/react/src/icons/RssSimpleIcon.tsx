import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M64,40A152,152,0,0,1,216,192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M64,40A152,152,0,0,1,216,192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M64,40A152,152,0,0,1,216,192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M64,40A152,152,0,0,1,216,192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M64,40A152,152,0,0,1,216,192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const RssSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
