import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="94" cy="72" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="166" cy="184" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 112 176 32 152 45.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 224 96 144 72 157.33" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><ellipse cx="94" cy="72" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="166" cy="184" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 112 176 32 152 45.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 224 96 144 72 157.33" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><ellipse cx="94" cy="72" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="166" cy="184" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 112 176 32 152 45.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 224 96 144 72 157.33" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><ellipse cx="92" cy="72" rx="28" ry="36" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="180 108 180 36 156 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><ellipse cx="164" cy="184" rx="28" ry="36" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="92 220 92 148 68 160" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="94" cy="72" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="166" cy="184" rx="30" ry="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 112 176 32 152 45.33" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 224 96 144 72 157.33" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BinaryIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
