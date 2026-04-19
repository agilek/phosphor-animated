import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 240 224 72 32 72.04 128 240" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="128 240 224 72 32 72.04 128 240" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="128 240 224 72 32 72.04 128 240" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="128 240 224 72 32 72.04 128 240" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M201.21,128,231,76A8,8,0,0,0,224,64H164.65L135,12a8,8,0,0,0-13.9,0L91.33,64H32a8,8,0,0,0-6.95,12l29.72,52L25.05,180a8,8,0,0,0,7,12H91.33l29.72,52a8,8,0,0,0,13.9,0l29.7-52H224A8,8,0,0,0,231,180Zm-18.42,0-27.42,48-54.75,0L73.2,128l27.42-48,54.75,0Z" fill="currentColor"/></>,
  duotone: <><polygon points="192 128 224 72 160.01 72.01 128 16 95.98 72.03 32 72.04 63.98 128 32 183.96 95.98 183.97 128 240 160.01 183.99 224 184 192 128" opacity="0.2" fill="currentColor"/><polygon points="128 240 224 72 32 72.04 128 240" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StarOfDavidIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
