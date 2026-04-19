import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M132.94,231.39A8,8,0,0,1,128,224V184H48a16,16,0,0,1-16-16V88A16,16,0,0,1,48,72h80V32a8,8,0,0,1,13.66-5.66l96,96a8,8,0,0,1,0,11.32l-96,96A8,8,0,0,1,132.94,231.39Z" fill="currentColor"/></>,
  duotone: <><path d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z" opacity="0.2" fill="currentColor"/><path d="M136,32l96,96-96,96V176H48a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h88Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ArrowFatRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
