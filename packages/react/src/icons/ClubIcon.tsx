import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M105,178.82a48,48,0,1,1-16.87-80,48,48,0,1,1,79.66,0,48,48,0,1,1-16.87,80L160,224H96Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M240,144a56,56,0,0,1-84.81,48h-4.44l8.91,29.7A8,8,0,0,1,152,232H104a8,8,0,0,1-7.66-10.3l8.91-29.7h-4.44A56,56,0,1,1,72,88c.78,0,1.55,0,2.33,0a56,56,0,1,1,107.34,0c.77,0,1.55,0,2.33,0A56.06,56.06,0,0,1,240,144Z" fill="currentColor"/></>,
  duotone: <><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" opacity="0.2" fill="currentColor"/><path d="M167.83,98.79a48,48,0,1,1-23.9,71.65L160,224H96l16.07-53.56a48,48,0,1,1-23.9-71.65,48,48,0,1,1,79.66,0Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const ClubIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
