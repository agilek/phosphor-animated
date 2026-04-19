import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><path d="M64,128a64,64,0,0,1,64-64" strokeWidth="8" className="draw-line"/><path d="M192,128a64,64,0,0,1-64,64" strokeWidth="8" className="draw-line"/><circle cx="128" cy="128" r="24" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><path d="M64,128a64,64,0,0,1,64-64" strokeWidth="12" className="draw-line"/><path d="M192,128a64,64,0,0,1-64,64" strokeWidth="12" className="draw-line"/><circle cx="128" cy="128" r="24" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><path d="M64,128a64,64,0,0,1,64-64" strokeWidth="16" className="draw-line"/><path d="M192,128a64,64,0,0,1-64,64" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="24" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><path d="M72,128a56,56,0,0,1,56-56" strokeWidth="24" className="draw-line"/><path d="M184,128a56,56,0,0,1-56,56" strokeWidth="24" className="draw-line"/><circle cx="128" cy="128" r="28" fill="currentColor"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM72,128a8,8,0,0,1-16,0,72.08,72.08,0,0,1,72-72,8,8,0,0,1,0,16A56.06,56.06,0,0,0,72,128Zm32,0a24,24,0,1,1,24,24A24,24,0,0,1,104,128Zm24,72a8,8,0,0,1,0-16,56.06,56.06,0,0,0,56-56,8,8,0,0,1,16,0A72.08,72.08,0,0,1,128,200Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm0,120a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><path d="M64,128a64,64,0,0,1,64-64" strokeWidth="16" className="draw-line"/><path d="M192,128a64,64,0,0,1-64,64" strokeWidth="16" className="draw-line"/><circle cx="128" cy="128" r="24" strokeWidth="16" className="draw-line"/></>,
};

export const VinylRecordIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
