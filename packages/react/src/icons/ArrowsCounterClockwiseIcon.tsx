import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 96 40 96 40 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 160 216 160 216 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="88 96 40 96 40 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 160 216 160 216 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="88 96 40 96 40 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 160 216 160 216 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="88 96 40 96 40 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 160 216 160 216 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="88 96 40 96 40 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,96,68.28,67.72A88,88,0,0,1,192,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 160 216 160 216 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M216,160l-28.28,28.28A88,88,0,0,1,64,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ArrowsCounterClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
