import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="144 192 80 56 16 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="200" cy="164" rx="32" ry="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="144 192 80 56 16 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="200" cy="164" rx="32" ry="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="144 192 80 56 16 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="200" cy="164" rx="32" ry="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="144 192 80 56 16 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="200" cy="164" rx="32" ry="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,192V124c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="144 192 80 56 16 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><ellipse cx="200" cy="164" rx="32" ry="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const TextAaIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
