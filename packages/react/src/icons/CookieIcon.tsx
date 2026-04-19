import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="156" cy="172" r="8" fill="currentColor"/><circle cx="92" cy="164" r="8" fill="currentColor"/><circle cx="84" cy="108" r="8" fill="currentColor"/><circle cx="132" cy="124" r="8" fill="currentColor"/><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><circle cx="156" cy="172" r="10" fill="currentColor"/><circle cx="92" cy="164" r="10" fill="currentColor"/><circle cx="84" cy="108" r="10" fill="currentColor"/><circle cx="132" cy="124" r="10" fill="currentColor"/><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><circle cx="156" cy="172" r="12" fill="currentColor"/><circle cx="92" cy="164" r="12" fill="currentColor"/><circle cx="84" cy="108" r="12" fill="currentColor"/><circle cx="132" cy="124" r="12" fill="currentColor"/><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><circle cx="156" cy="172" r="16" fill="currentColor"/><circle cx="92" cy="164" r="16" fill="currentColor"/><circle cx="84" cy="108" r="16" fill="currentColor"/><circle cx="132" cy="124" r="16" fill="currentColor"/><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M224,120a40,40,0,0,1-40-40,8,8,0,0,0-8-8,40,40,0,0,1-40-40,8,8,0,0,0-8-8A104,104,0,1,0,232,128,8,8,0,0,0,224,120ZM75.51,99.51a12,12,0,1,1,0,17A12,12,0,0,1,75.51,99.51Zm25,73a12,12,0,1,1,0-17A12,12,0,0,1,100.49,172.49Zm23-40a12,12,0,1,1,17,0A12,12,0,0,1,123.51,132.49Zm41,48a12,12,0,1,1,0-17A12,12,0,0,1,164.49,180.49Z" fill="currentColor"/></>,
  duotone: <><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" opacity="0.2" fill="currentColor"/><circle cx="156" cy="172" r="12" fill="currentColor"/><circle cx="92" cy="164" r="12" fill="currentColor"/><circle cx="84" cy="108" r="12" fill="currentColor"/><circle cx="132" cy="124" r="12" fill="currentColor"/><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const CookieIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
