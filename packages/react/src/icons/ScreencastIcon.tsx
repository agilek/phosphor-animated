import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,192a16,16,0,0,1,16,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,160a48,48,0,0,1,48,48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,128a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,192a16,16,0,0,1,16,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,160a48,48,0,0,1,48,48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,128a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,192a16,16,0,0,1,16,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,160a48,48,0,0,1,48,48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,128a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M36,68V60a8,8,0,0,1,8-8H212a8,8,0,0,1,8,8V196a8,8,0,0,1-8,8H172" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M36,188a16,16,0,0,1,16,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M36,148a56,56,0,0,1,56,56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M36,108a96,96,0,0,1,96,96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,192a16,16,0,0,1,16,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M32,160a48,48,0,0,1,48,48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M32,128a80,80,0,0,1,80,80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ScreencastIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
