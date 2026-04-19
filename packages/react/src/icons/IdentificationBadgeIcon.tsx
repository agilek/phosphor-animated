import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="136" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,192a60,60,0,0,1,96,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="136" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,192a60,60,0,0,1,96,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="136" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,192a60,60,0,0,1,96,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="136" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M84,187.21a60,60,0,0,1,88,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="136" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,192a60,60,0,0,1,96,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const IdentificationBadgeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
