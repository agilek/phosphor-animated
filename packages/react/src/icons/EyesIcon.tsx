import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="56" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="152" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><ellipse cx="176" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><ellipse cx="80" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="56" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="152" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><ellipse cx="176" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><ellipse cx="80" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="56" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="152" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><ellipse cx="176" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><ellipse cx="80" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="56" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="152" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><ellipse cx="176" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><ellipse cx="80" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="56" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="152" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><ellipse cx="176" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><ellipse cx="80" cy="128" rx="48" ry="88" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const EyesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
