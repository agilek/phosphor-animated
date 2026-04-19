import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 232 128 88 200 232" strokeWidth="8" className="draw-line"/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" strokeWidth="8" className="draw-line"/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="56 232 128 88 200 232" strokeWidth="12" className="draw-line"/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" strokeWidth="12" className="draw-line"/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="56 232 128 88 200 232" strokeWidth="16" className="draw-line"/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" strokeWidth="16" className="draw-line"/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="56 232 128 92 200 232" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M91.85,74.85a40,40,0,0,1,71.93-.74" strokeWidth="24" className="draw-line"/><path d="M60.11,138.34a80,80,0,1,1,135.78,0" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M135.16,84.42a8,8,0,0,0-14.32,0l-72,144a8,8,0,0,0,14.31,7.16L77,208h102.1l13.79,27.58A8,8,0,0,0,200,240a8,8,0,0,0,7.15-11.58ZM128,105.89,155.06,160H100.94Zm31.49-12.15a32,32,0,1,0-63,0,8,8,0,1,1-15.74,2.85,48,48,0,1,1,94.46,0,8,8,0,0,1-7.86,6.58,8.74,8.74,0,0,1-1.43-.13A8,8,0,0,1,159.49,93.74ZM64.15,136.21a80,80,0,1,1,127.7,0,8,8,0,0,1-12.76-9.65,64,64,0,1,0-102.18,0,8,8,0,0,1-12.76,9.65Z" fill="currentColor"/></>,
  duotone: <><path d="M128,16A72,72,0,0,0,95.8,152.4L128,88l32.2,64.4A72,72,0,0,0,128,16Z" opacity="0.2" fill="currentColor"/><polyline points="56 232 128 88 200 232" strokeWidth="16" className="draw-line"/><path d="M88.64,95.17a40,40,0,1,1,78.72,0" strokeWidth="16" className="draw-line"/><path d="M70.53,131.38a72,72,0,1,1,114.94,0" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
};

export const CellTowerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
