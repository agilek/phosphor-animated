import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="64" r="12" fill="currentColor"/><circle cx="128" cy="192" r="12" fill="currentColor"/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="64" r="14" fill="currentColor"/><circle cx="128" cy="192" r="14" fill="currentColor"/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="64" r="16" fill="currentColor"/><circle cx="128" cy="192" r="16" fill="currentColor"/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="64" r="20" fill="currentColor"/><circle cx="128" cy="192" r="20" fill="currentColor"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,64a16,16,0,1,1-16,16A16,16,0,0,1,128,64Zm0,128a16,16,0,1,1,16-16A16,16,0,0,1,128,192Zm56-56H72a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="16" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="64" r="16" fill="currentColor"/><circle cx="128" cy="192" r="16" fill="currentColor"/></>,
};

export const DivideIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
