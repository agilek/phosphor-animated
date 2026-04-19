import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><path d="M96,176v8a32,32,0,0,0,64,0v-8" strokeWidth="8" className="draw-line"/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><path d="M96,176v8a32,32,0,0,0,64,0v-8" strokeWidth="12" className="draw-line"/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><path d="M96,176v8a32,32,0,0,0,64,0v-8" strokeWidth="16" className="draw-line"/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><path d="M96,176v8a32,32,0,0,0,64,0v-8" strokeWidth="24" className="draw-line"/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M176,74.78V72a16,16,0,0,0-16-16H136V16a8,8,0,0,0-16,0V56H96A16,16,0,0,0,80,72v2.78A111.73,111.73,0,0,0,16,176a8,8,0,0,0,8,8H88a40,40,0,0,0,80,0h64a8,8,0,0,0,8-8A111.73,111.73,0,0,0,176,74.78ZM128,208a24,24,0,0,1-24-24h48A24,24,0,0,1,128,208Z" fill="currentColor"/></>,
  duotone: <><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line"/><path d="M96,176v8a32,32,0,0,0,64,0v-8" strokeWidth="16" className="draw-line"/><path d="M88,72a8,8,0,0,1,8-8h64a8,8,0,0,1,8,8v8a104,104,0,0,1,64,96H24A104,104,0,0,1,88,80Z" strokeWidth="16" className="draw-line"/></>,
};

export const LampPendantIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
