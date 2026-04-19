import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="96" cy="160" r="32" strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/><path d="M141.25,205.25a64,64,0,1,1-90.5-90.5L133.49,32" strokeWidth="8" className="draw-line"/></>,
  light: <><circle cx="96" cy="160" r="32" strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/><path d="M141.25,205.25a64,64,0,1,1-90.5-90.5L133.49,32" strokeWidth="12" className="draw-line"/></>,
  regular: <><circle cx="96" cy="160" r="32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M141.25,205.25a64,64,0,1,1-90.5-90.5L133.49,32" strokeWidth="16" className="draw-line"/></>,
  bold: <><circle cx="96" cy="160" r="24" strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/><path d="M141.25,205.25a64,64,0,1,1-90.5-90.5L133.49,32" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M136,160a40,40,0,1,1-40-40A40,40,0,0,1,136,160Zm74.34-37.66-48,48a8,8,0,0,0,11.32,11.32l48-48a8,8,0,0,0-11.32-11.32Zm-20.68-12.68a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,11.32,11.32Zm40-51.32a8,8,0,0,0-11.32,0l-16,16a8,8,0,0,0,11.32,11.32l16-16A8,8,0,0,0,229.66,58.34ZM122.34,101.66a8,8,0,0,0,11.32,0l72-72a8,8,0,1,0-11.32-11.32l-72,72A8,8,0,0,0,122.34,101.66ZM135.6,199.6a56,56,0,0,1-79.2-79.2l82.75-82.74a8,8,0,1,0-11.32-11.32L45.09,109.09A72,72,0,1,0,146.91,210.91,8,8,0,0,0,135.6,199.6Z" fill="currentColor"/></>,
  duotone: <><circle cx="96" cy="160" r="32" opacity="0.2" fill="currentColor"/><circle cx="96" cy="160" r="32" strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/><path d="M141.25,205.25a64,64,0,1,1-90.5-90.5L133.49,32" strokeWidth="16" className="draw-line"/></>,
};

export const MeteorIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
