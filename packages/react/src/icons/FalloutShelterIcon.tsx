import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="96 80 160 80 128 128 96 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 128 192 128 160 176 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="64 128 128 128 96 176 64 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="96 80 160 80 128 128 96 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 128 192 128 160 176 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="64 128 128 128 96 176 64 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="96 80 160 80 128 128 96 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 128 192 128 160 176 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="64 128 128 128 96 176 64 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="96 80 160 80 128 128 96 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 128 192 128 160 176 128 128" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polygon points="64 128 128 128 96 176 64 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const FalloutShelterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
