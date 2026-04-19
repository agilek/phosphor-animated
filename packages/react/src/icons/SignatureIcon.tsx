import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,224S139.52,32,77.91,32C32.07,32,31.58,225.11,128,104.19c0,0,8.11,39.44,27.23,39.81,7.72.15,17.25-6.31,28.77-24,0,0,0,24,48,24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,224S139.52,32,77.91,32C32.07,32,31.58,225.11,128,104.19c0,0,8.11,39.44,27.23,39.81,7.72.15,17.25-6.31,28.77-24,0,0,0,24,48,24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,224S139.52,32,77.91,32C32.07,32,31.58,225.11,128,104.19c0,0,8.11,39.44,27.23,39.81,7.72.15,17.25-6.31,28.77-24,0,0,0,24,48,24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,224S139.6,32,78,32c-45.84,0-46.41,184.91,50,64,0,0,16,77.43,56,16,0,0,0,24,48,24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,224S139.52,32,77.91,32C32.07,32,31.58,225.11,128,104.19c0,0,8.11,39.44,27.23,39.81,7.72.15,17.25-6.31,28.77-24,0,0,0,24,48,24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SignatureIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
