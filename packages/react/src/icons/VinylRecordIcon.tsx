import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128a64,64,0,0,1,64-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,128a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128a64,64,0,0,1,64-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,128a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128a64,64,0,0,1,64-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,128a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72,128a56,56,0,0,1,56-56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M184,128a56,56,0,0,1-56,56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128a64,64,0,0,1,64-64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,128a64,64,0,0,1-64,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const VinylRecordIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
