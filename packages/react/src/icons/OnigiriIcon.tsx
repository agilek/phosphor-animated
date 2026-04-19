import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M231.53,146.57,175.68,50.66l-.11-.19a56,56,0,0,0-95.14,0l-.11.19L24.47,146.57A56,56,0,0,0,72.09,232H183.91a56,56,0,0,0,47.62-85.43Zm-12.68,48.88A39.49,39.49,0,0,1,183.91,216H176V168a16,16,0,0,0-16-16H96a16,16,0,0,0-16,16v48H72.09a40,40,0,0,1-34-61.09,2,2,0,0,0,.11-.2l55.85-95.9a40,40,0,0,1,67.84,0l55.85,95.9a2,2,0,0,0,.11.2A39.5,39.5,0,0,1,218.85,195.45Z" fill="currentColor"/></>,
  duotone: <><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56Z" opacity="0.2" fill="currentColor"/><path d="M88,224V168a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v56" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M31.29,150.69C11.45,182.66,34.44,224,72.08,224H183.92c37.64,0,60.63-41.34,40.79-73.31l-55.93-96C150,24.44,106,24.44,87.22,54.69Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const OnigiriIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
