import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M224,88v80a16,16,0,0,1-16,16H128v40a8,8,0,0,1-13.66,5.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h80A16,16,0,0,1,224,88Z" fill="currentColor"/></>,
  duotone: <><path d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z" opacity="0.2" fill="currentColor"/><path d="M120,32,24,128l96,96V176h88a8,8,0,0,0,8-8V88a8,8,0,0,0-8-8H120Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ArrowFatLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
