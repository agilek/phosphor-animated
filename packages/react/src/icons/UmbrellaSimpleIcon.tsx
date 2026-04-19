import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,200a24,24,0,0,1-48,0V136" strokeWidth="8" className="draw-line"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M176,200a24,24,0,0,1-48,0V136" strokeWidth="12" className="draw-line"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M176,200a24,24,0,0,1-48,0V136" strokeWidth="16" className="draw-line"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M176,200a24,24,0,0,1-48,0V136" strokeWidth="24" className="draw-line"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M235.76,138.83A16,16,0,0,1,224,144H136v56a16,16,0,0,0,32,0,8,8,0,0,1,16,0,32,32,0,0,1-64,0V144H32a16,16,0,0,1-16-17.37,112.44,112.44,0,0,1,188.2-72.88A111.56,111.56,0,0,1,240,126.63,16.1,16.1,0,0,1,235.76,138.83Z" fill="currentColor"/></>,
  duotone: <><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" opacity="0.2" fill="currentColor"/><path d="M176,200a24,24,0,0,1-48,0V136" strokeWidth="16" className="draw-line"/><path d="M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" strokeWidth="16" className="draw-line"/></>,
};

export const UmbrellaSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
