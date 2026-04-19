import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 96 216 96 216 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96,187.72,67.72A88,88,0,0,0,64,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="88 160 40 160 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160l28.28,28.28A88,88,0,0,0,192,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="168 96 216 96 216 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96,187.72,67.72A88,88,0,0,0,64,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="88 160 40 160 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160l28.28,28.28A88,88,0,0,0,192,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="168 96 216 96 216 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96,187.72,67.72A88,88,0,0,0,64,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="88 160 40 160 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160l28.28,28.28A88,88,0,0,0,192,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="168 96 216 96 216 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96,187.72,67.72A88,88,0,0,0,64,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="88 160 40 160 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160l28.28,28.28A88,88,0,0,0,192,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="168 96 216 96 216 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,96,187.72,67.72A88,88,0,0,0,64,67" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="88 160 40 160 40 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M40,160l28.28,28.28A88,88,0,0,0,192,189" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ArrowsClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
