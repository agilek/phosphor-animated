import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="176 136 224 88 176 40" strokeWidth="8" className="draw-line"/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="176 136 224 88 176 40" strokeWidth="12" className="draw-line"/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="176 136 224 88 176 40" strokeWidth="16" className="draw-line"/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="176 136 224 88 176 40" strokeWidth="24" className="draw-line"/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88H224" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M168,136V96H88a48,48,0,0,0,0,96h88a8,8,0,0,1,0,16H88A64,64,0,0,1,88,80h80V40a8,8,0,0,1,13.66-5.66l48,48a8,8,0,0,1,0,11.32l-48,48A8,8,0,0,1,168,136Z" fill="currentColor"/></>,
  duotone: <><polygon points="176 136 224 88 176 40 176 136" opacity="0.2" fill="currentColor"/><polygon points="176 136 224 88 176 40 176 136" strokeWidth="16" className="draw-line"/><path d="M176,200H88a56,56,0,0,1-56-56h0A56,56,0,0,1,88,88h88" strokeWidth="16" className="draw-line"/></>,
};

export const ArrowUUpRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
