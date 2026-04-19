import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="88" cy="156" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,216h40a64,64,0,0,0,64-64V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="88" cy="156" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,216h40a64,64,0,0,0,64-64V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="88" cy="156" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,216h40a64,64,0,0,0,64-64V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="88" cy="156" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,216h40a64,64,0,0,0,64-64V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="88" cy="156" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,128a96,96,0,0,0-192,0v24a64,64,0,0,0,128,0V128h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M88,216h40a64,64,0,0,0,64-64V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BaseballHelmetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
