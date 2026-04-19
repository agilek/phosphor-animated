import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="44" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="212" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 168 40 203.14 145.43" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="188.66 101.97 128 176 72 176" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="44" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="212" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 168 40 203.14 145.43" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="188.66 101.97 128 176 72 176" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="44" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="212" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 168 40 203.14 145.43" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="188.66 101.97 128 176 72 176" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="44" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="212" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 168 40 203.14 145.43" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="187.75 99.25 120 176 72 176" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="44" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="212" cy="172" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 168 40 203.14 145.43" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="188.66 101.97 128 176 72 176" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ScooterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
