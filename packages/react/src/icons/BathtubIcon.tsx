import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><rect x="136" y="96" width="64" height="48" strokeWidth="8" className="draw-line"/><path d="M200,104h40v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136" strokeWidth="8" className="draw-line"/><path d="M56,104V52A20,20,0,0,1,76,32,20.44,20.44,0,0,1,96,48" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><rect x="136" y="96" width="64" height="48" strokeWidth="12" className="draw-line"/><path d="M200,104h40v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136" strokeWidth="12" className="draw-line"/><path d="M56,104V52A20,20,0,0,1,76,32,20.44,20.44,0,0,1,96,48" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="136" y="96" width="64" height="48" strokeWidth="16" className="draw-line"/><path d="M200,104h40v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136" strokeWidth="16" className="draw-line"/><path d="M56,104V52A20,20,0,0,1,76,32,20.44,20.44,0,0,1,96,48" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><rect x="136" y="96" width="64" height="48" strokeWidth="24" className="draw-line"/><path d="M200,104h40v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136" strokeWidth="24" className="draw-line"/><path d="M56,104V52A20,20,0,0,1,76,32,20.44,20.44,0,0,1,96,48" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M240,96H216a8,8,0,0,0-8-8H136a8,8,0,0,0-8,8H64V52A12,12,0,0,1,76,40a12.44,12.44,0,0,1,12.16,9.59,8,8,0,0,0,15.68-3.18A28.32,28.32,0,0,0,76,24,28,28,0,0,0,48,52V96H16a8,8,0,0,0-8,8v40a56.06,56.06,0,0,0,56,56v16a8,8,0,0,0,16,0V200h96v16a8,8,0,0,0,16,0V200a56.06,56.06,0,0,0,56-56V104A8,8,0,0,0,240,96Zm-40,8v40H144V104Z" fill="currentColor"/></>,
  duotone: <><path d="M200,104v40H136V104H16v40a48,48,0,0,0,48,48H192a48,48,0,0,0,48-48V104Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><rect x="136" y="96" width="64" height="48" strokeWidth="16" className="draw-line"/><path d="M200,104h40v40a48,48,0,0,1-48,48H64a48,48,0,0,1-48-48V104H136" strokeWidth="16" className="draw-line"/><path d="M56,104V52A20,20,0,0,1,76,32,20.44,20.44,0,0,1,96,48" strokeWidth="16" className="draw-line"/></>,
};

export const BathtubIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
