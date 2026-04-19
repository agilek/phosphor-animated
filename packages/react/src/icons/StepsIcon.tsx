import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M240,56V200a8,8,0,0,1-8,8H8a8,8,0,0,1,0-16H56V152a8,8,0,0,1,8-8h48V104a8,8,0,0,1,8-8h48V56a8,8,0,0,1,8-8h56A8,8,0,0,1,240,56Z" fill="currentColor"/></>,
  duotone: <><path d="M224,200H72V152h56V104h56V56h56V184A16,16,0,0,1,224,200Z" opacity="0.2" fill="currentColor"/><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const StepsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
