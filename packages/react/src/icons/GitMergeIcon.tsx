import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="80" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="144" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,144l-50-7.15a16,16,0,0,1-9.88-5.42L80,80v96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="80" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="144" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,144l-50-7.15a16,16,0,0,1-9.88-5.42L80,80v96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="80" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="144" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,144l-50-7.15a16,16,0,0,1-9.88-5.42L80,80v96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="80" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="144" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,144l-50-7.15a16,16,0,0,1-9.88-5.42L80,80v96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="80" cy="200" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="80" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="144" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M184,144l-50-7.15a16,16,0,0,1-9.88-5.42L80,80v96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const GitMergeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
