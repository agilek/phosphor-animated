import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M33.6,145.5A96,96,0,0,1,96,37.5v72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M33.6,145.5A96,96,0,0,1,96,37.5v72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M33.6,145.5A96,96,0,0,1,96,37.5v72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M32.42,137q-.42-4.44-.42-9A95.93,95.93,0,0,1,88,40.74v65.41Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M33.6,145.5A96,96,0,0,1,96,37.5v72Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ChartPieSliceIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
