import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="4" opacity="0.5" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="4" opacity="0.5" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="4" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="4" opacity="0.5" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BandaidsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
