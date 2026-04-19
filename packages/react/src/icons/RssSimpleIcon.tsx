import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M64,40A152,152,0,0,1,216,192" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="68" cy="188" r="8" fill="currentColor"/></>,
  light: <><path d="M64,40A152,152,0,0,1,216,192" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="68" cy="188" r="10" fill="currentColor"/></>,
  regular: <><path d="M64,40A152,152,0,0,1,216,192" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="68" cy="188" r="12" fill="currentColor"/></>,
  bold: <><path d="M64,40A152,152,0,0,1,216,192" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="68" cy="188" r="16" fill="currentColor"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM76,192a12,12,0,1,1,12-12A12,12,0,0,1,76,192Zm60,0a8,8,0,0,1-8-8,56.06,56.06,0,0,0-56-56,8,8,0,0,1,0-16,72.08,72.08,0,0,1,72,72A8,8,0,0,1,136,192Zm48,0a8,8,0,0,1-8-8A104.11,104.11,0,0,0,72,80a8,8,0,0,1,0-16A120.13,120.13,0,0,1,192,184,8,8,0,0,1,184,192Z" fill="currentColor"/></>,
  duotone: <><path d="M64,192V40A152,152,0,0,1,216,192Z" opacity="0.2" fill="currentColor"/><path d="M64,40A152,152,0,0,1,216,192" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,112a80,80,0,0,1,80,80" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><circle cx="68" cy="188" r="12" fill="currentColor"/></>,
};

export const RssSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
