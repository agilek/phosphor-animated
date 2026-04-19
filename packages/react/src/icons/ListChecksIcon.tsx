import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><polyline points="40 64 56 80 88 48" strokeWidth="8" className="draw-line"/><polyline points="40 128 56 144 88 112" strokeWidth="8" className="draw-line"/><polyline points="40 192 56 208 88 176" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><polyline points="40 64 56 80 88 48" strokeWidth="12" className="draw-line"/><polyline points="40 128 56 144 88 112" strokeWidth="12" className="draw-line"/><polyline points="40 192 56 208 88 176" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="40 64 56 80 88 48" strokeWidth="16" className="draw-line"/><polyline points="40 128 56 144 88 112" strokeWidth="16" className="draw-line"/><polyline points="40 192 56 208 88 176" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><polyline points="40 64 56 80 88 48" strokeWidth="24" className="draw-line"/><polyline points="40 128 56 144 88 112" strokeWidth="24" className="draw-line"/><polyline points="40 192 56 208 88 176" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM117.66,149.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L80,164.69l26.34-26.35a8,8,0,0,1,11.32,11.32Zm0-64-32,32a8,8,0,0,1-11.32,0l-16-16A8,8,0,0,1,69.66,90.34L80,100.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM192,168H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm0-64H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="128" y="64" width="88" height="128" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><polyline points="40 64 56 80 88 48" strokeWidth="16" className="draw-line"/><polyline points="40 128 56 144 88 112" strokeWidth="16" className="draw-line"/><polyline points="40 192 56 208 88 176" strokeWidth="16" className="draw-line"/></>,
};

export const ListChecksIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
