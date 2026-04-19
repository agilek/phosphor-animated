import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,128V24a64,64,0,0,1,50,104" strokeWidth="8" className="draw-line"/><path d="M128,128H24A64,64,0,0,1,128,78" strokeWidth="8" className="draw-line"/><path d="M128,128V232A64,64,0,0,1,78,128" strokeWidth="8" className="draw-line"/><path d="M128,128H232a64,64,0,0,1-104,50" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M128,128V24a64,64,0,0,1,50,104" strokeWidth="12" className="draw-line"/><path d="M128,128H24A64,64,0,0,1,128,78" strokeWidth="12" className="draw-line"/><path d="M128,128V232A64,64,0,0,1,78,128" strokeWidth="12" className="draw-line"/><path d="M128,128H232a64,64,0,0,1-104,50" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M128,128V24a64,64,0,0,1,50,104" strokeWidth="16" className="draw-line"/><path d="M128,128H24A64,64,0,0,1,128,78" strokeWidth="16" className="draw-line"/><path d="M128,128V232A64,64,0,0,1,78,128" strokeWidth="16" className="draw-line"/><path d="M128,128H232a64,64,0,0,1-104,50" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M128,128V24a64,64,0,0,1,50,104" strokeWidth="24" className="draw-line"/><path d="M128,128H24A64,64,0,0,1,128,78" strokeWidth="24" className="draw-line"/><path d="M128,128V232A64,64,0,0,1,78,128" strokeWidth="24" className="draw-line"/><path d="M128,128H232a64,64,0,0,1-104,50" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72Zm80,112A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z" fill="currentColor"/></>,
  duotone: <><path d="M128,128V24a64,64,0,0,1,50,104Z" opacity="0.2" fill="currentColor"/><path d="M128,128V232A64,64,0,0,1,78,128Z" opacity="0.2" fill="currentColor"/><path d="M128,128V24a64,64,0,0,1,50,104" strokeWidth="16" className="draw-line"/><path d="M128,128H24A64,64,0,0,1,128,78" strokeWidth="16" className="draw-line"/><path d="M128,128V232A64,64,0,0,1,78,128" strokeWidth="16" className="draw-line"/><path d="M128,128H232a64,64,0,0,1-104,50" strokeWidth="16" className="draw-line"/></>,
};

export const GooglePhotosLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
