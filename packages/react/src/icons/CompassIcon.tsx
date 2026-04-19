import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line"/><polygon points="176 80 112 112 80 176 144 144 176 80" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line"/><polygon points="176 80 112 112 80 176 144 144 176 80" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polygon points="176 80 112 112 80 176 144 144 176 80" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line"/><polygon points="168 88 112 112 88 168 144 144 168 88" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z" fill="currentColor"/></>,
  duotone: <><path d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line"/><polygon points="176 80 112 112 80 176 144 144 176 80" strokeWidth="16" className="draw-line"/></>,
};

export const CompassIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
