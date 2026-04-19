import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M112,168V80H216a32,32,0,0,1,32,32v56" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="24 168 248 168 248 208" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M112,168V80H216a32,32,0,0,1,32,32v56" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="24 168 248 168 248 208" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M112,168V80H216a32,32,0,0,1,32,32v56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="24 168 248 168 248 208" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M112,168V80H212a32,32,0,0,1,32,32v56" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="24 168 244 168 244 208" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Z" fill="currentColor"/></>,
  duotone: <><path d="M112,80H216a32,32,0,0,1,32,32v56a0,0,0,0,1,0,0H112a0,0,0,0,1,0,0V80A0,0,0,0,1,112,80Z" opacity="0.2" fill="currentColor"/><path d="M112,168V80H216a32,32,0,0,1,32,32v56" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="24 168 248 168 248 208" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const BedIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
