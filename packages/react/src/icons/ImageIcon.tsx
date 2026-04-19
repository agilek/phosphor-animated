import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ImageIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
