import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="224 64 128 96 32 64 128 32 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="224 64 128 96 32 64 128 32 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="224 64 128 96 32 64 128 32 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="224 64 128 96 32 64 128 32 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,216c15.7-24.08,41.11-40,72-40s56.3,15.92,72,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="224 64 128 96 32 64 128 32 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M169.34,82.22a56,56,0,1,1-82.68,0" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const StudentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
