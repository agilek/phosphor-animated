import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="160 112 112 80 112 144 160 112" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="160 112 112 80 112 144 160 112" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="160 112 112 80 112 144 160 112" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="120" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="148 108 116 88 116 128 148 108" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Zm0-152V168a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-68,56a8,8,0,0,0-3.41-6.55l-40-28A8,8,0,0,0,108,84v56a8,8,0,0,0,12.59,6.55l40-28A8,8,0,0,0,164,112Z" fill="currentColor"/></>,
  duotone: <><path d="M216,48H40a8,8,0,0,0-8,8V168a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48ZM112,144V80l48,32Z" opacity="0.2" fill="currentColor"/><polygon points="160 112 112 80 112 144 160 112" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const VideoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
