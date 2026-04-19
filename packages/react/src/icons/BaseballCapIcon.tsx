import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,152a160,160,0,0,1,192,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,152a160,160,0,0,1,192,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,152a160,160,0,0,1,192,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,152a160,160,0,0,1,192,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,128a96,96,0,0,1,192,0v56a16,16,0,0,1-25.48,12.88C182.53,185.26,159,176,128,176s-54.53,9.26-70.52,20.88A16,16,0,0,1,32,184Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,152a160,160,0,0,1,192,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88.4,124.94C92.57,67.43,128,32,128,32s35.43,35.43,39.6,92.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BaseballCapIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
