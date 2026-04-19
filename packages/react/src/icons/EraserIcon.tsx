import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,216,219.31,108.69a16,16,0,0,0,0-22.63L177.94,44.69a16,16,0,0,0-22.63,0L36.69,163.31a16,16,0,0,0,0,22.63L66.75,216H216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,216,219.31,108.69a16,16,0,0,0,0-22.63L177.94,44.69a16,16,0,0,0-22.63,0L36.69,163.31a16,16,0,0,0,0,22.63L66.75,216H216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,216,219.31,108.69a16,16,0,0,0,0-22.63L177.94,44.69a16,16,0,0,0-22.63,0L36.69,163.31a16,16,0,0,0,0,22.63L66.75,216H216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,216,219.31,108.69a16,16,0,0,0,0-22.63L177.94,44.69a16,16,0,0,0-22.63,0L36.69,163.31a16,16,0,0,0,0,22.63L66.75,216H216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,216,219.31,108.69a16,16,0,0,0,0-22.63L177.94,44.69a16,16,0,0,0-22.63,0L36.69,163.31a16,16,0,0,0,0,22.63L66.75,216H216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const EraserIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
