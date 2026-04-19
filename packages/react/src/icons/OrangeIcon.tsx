import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="152" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,72h0a56,56,0,0,1,56-56h8a56,56,0,0,1-56,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,72h0A56,56,0,0,0,72,16H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M176,160a49.52,49.52,0,0,1-40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="152" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,72h0a56,56,0,0,1,56-56h8a56,56,0,0,1-56,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,72h0A56,56,0,0,0,72,16H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M176,160a49.52,49.52,0,0,1-40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="152" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,72h0a56,56,0,0,1,56-56h8a56,56,0,0,1-56,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,72h0A56,56,0,0,0,72,16H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M176,160a49.52,49.52,0,0,1-40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="152" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,72h0a56,56,0,0,1,56-56h8a56,56,0,0,1-56,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,72h0A56,56,0,0,0,72,16H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M166.17,164A40.11,40.11,0,0,1,140,190.17" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="152" r="80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,72h0a56,56,0,0,1,56-56h8a56,56,0,0,1-56,56Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M128,72h0A56,56,0,0,0,72,16H64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M176,160a49.52,49.52,0,0,1-40,40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const OrangeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
