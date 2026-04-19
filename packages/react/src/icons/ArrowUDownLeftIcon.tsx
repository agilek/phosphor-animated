import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="80 120 32 168 80 216" strokeWidth="8" className="draw-line"/><path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H32" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="80 120 32 168 80 216" strokeWidth="12" className="draw-line"/><path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H32" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="80 120 32 168 80 216" strokeWidth="16" className="draw-line"/><path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H32" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="80 120 32 168 80 216" strokeWidth="24" className="draw-line"/><path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M232,112a64.07,64.07,0,0,1-64,64H88v40a8,8,0,0,1-13.66,5.66l-48-48a8,8,0,0,1,0-11.32l48-48A8,8,0,0,1,88,120v40h80a48,48,0,0,0,0-96H80a8,8,0,0,1,0-16h88A64.07,64.07,0,0,1,232,112Z" fill="currentColor"/></>,
  duotone: <><polygon points="80 120 32 168 80 216 80 120" opacity="0.2" fill="currentColor"/><polygon points="80 120 32 168 80 216 80 120" strokeWidth="16" className="draw-line"/><path d="M80,56h88a56,56,0,0,1,56,56h0a56,56,0,0,1-56,56H80" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowUDownLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
