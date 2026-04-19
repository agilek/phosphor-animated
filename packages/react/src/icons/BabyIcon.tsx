import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M156,168a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M156,168a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M156,168a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M156,172a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M123.93,32.08C108,52.06,108,72,108,72a20,20,0,0,0,40,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M156,168a53,53,0,0,1-56,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BabyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
