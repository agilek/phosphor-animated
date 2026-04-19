import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="208 96 128 176 48 96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="208 96 128 176 48 96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="208 96 128 176 48 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="208 96 128 176 48 96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94Z" fill="currentColor"/></>,
  duotone: <><polygon points="208 96 128 176 48 96 208 96" opacity="0.2" fill="currentColor"/><polygon points="208 96 128 176 48 96 208 96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const CaretDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
