import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,120a48,48,0,0,1-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,200c17.43,15.6,40.59,24.48,65.94,24,51.48-1,93.33-43.13,94.05-94.61A96,96,0,0,0,128,32h-8V64L16,128l13.79,22a24,24,0,0,0,23.51,9.62c17.47-3,48.06-7.64,74.7,8.34h0L92.13,217.32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M176,120a48,48,0,0,1-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,200c17.43,15.6,40.59,24.48,65.94,24,51.48-1,93.33-43.13,94.05-94.61A96,96,0,0,0,128,32h-8V64L16,128l13.79,22a24,24,0,0,0,23.51,9.62c17.47-3,48.06-7.64,74.7,8.34h0L92.13,217.32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M176,120a48,48,0,0,1-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,200c17.43,15.6,40.59,24.48,65.94,24,51.48-1,93.33-43.13,94.05-94.61A96,96,0,0,0,128,32h-8V64L16,128l13.79,22a24,24,0,0,0,23.51,9.62c17.47-3,48.06-7.64,74.7,8.34h0L92.13,217.32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M176,120a48,48,0,0,1-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,200c17.43,15.6,40.59,24.48,65.94,24,51.48-1,93.33-43.13,94.05-94.61A96,96,0,0,0,128,32h-8V60L16,128l13.79,22a24,24,0,0,0,23.51,9.62c17.47-3,48.06-7.64,74.7,8.34h0L92.13,217.32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M176,120a48,48,0,0,1-48,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,200c17.43,15.6,40.59,24.48,65.94,24,51.48-1,93.33-43.13,94.05-94.61A96,96,0,0,0,128,32h-8V64L16,128l13.79,22a24,24,0,0,0,23.51,9.62c17.47-3,48.06-7.64,74.7,8.34h0L92.13,217.32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HorseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
