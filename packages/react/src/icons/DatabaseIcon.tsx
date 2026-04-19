import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="80" rx="88" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><ellipse cx="128" cy="80" rx="88" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><ellipse cx="128" cy="80" rx="88" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><ellipse cx="128" cy="80" rx="88" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="128" cy="80" rx="88" ry="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const DatabaseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
