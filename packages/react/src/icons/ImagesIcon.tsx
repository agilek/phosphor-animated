import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="64" y="48" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128.69l38.34-38.35a8,8,0,0,1,11.32,0L163.31,140,189,114.34a8,8,0,0,1,11.31,0L224,138.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="64" y="48" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128.69l38.34-38.35a8,8,0,0,1,11.32,0L163.31,140,189,114.34a8,8,0,0,1,11.31,0L224,138.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="64" y="48" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128.69l38.34-38.35a8,8,0,0,1,11.32,0L163.31,140,189,114.34a8,8,0,0,1,11.31,0L224,138.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="72" y="48" width="152" height="120" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,168v32a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M72,156.69l46.34-46.35a8,8,0,0,1,11.32,0L187.31,168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="64" y="48" width="160" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,128.69l38.34-38.35a8,8,0,0,1,11.32,0L163.31,140,189,114.34a8,8,0,0,1,11.31,0L224,138.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ImagesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
