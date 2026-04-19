import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="8" fill="currentColor"/><circle cx="84" cy="128" r="8" fill="currentColor"/><circle cx="172" cy="128" r="8" fill="currentColor"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><circle cx="128" cy="128" r="10" fill="currentColor"/><circle cx="84" cy="128" r="10" fill="currentColor"/><circle cx="172" cy="128" r="10" fill="currentColor"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/><circle cx="172" cy="128" r="12" fill="currentColor"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><circle cx="104" cy="128" r="16" fill="currentColor"/><circle cx="152" cy="128" r="16" fill="currentColor"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z" fill="currentColor"/></>,
  duotone: <><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" opacity="0.2" fill="currentColor"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/><circle cx="172" cy="128" r="12" fill="currentColor"/></>,
};

export const ChatCircleDotsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
