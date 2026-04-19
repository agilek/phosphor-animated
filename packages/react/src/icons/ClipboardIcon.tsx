import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" strokeWidth="8" className="draw-line"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" strokeWidth="8" className="draw-line"/></>,
  light: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" strokeWidth="12" className="draw-line"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" strokeWidth="12" className="draw-line"/></>,
  regular: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" strokeWidth="16" className="draw-line"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" strokeWidth="16" className="draw-line"/></>,
  bold: <><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" strokeWidth="24" className="draw-line"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Z" fill="currentColor"/></>,
  duotone: <><path d="M160,40a39.83,39.83,0,0,1,8,24v8H88V64a39.83,39.83,0,0,1,8-24H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8Z" opacity="0.2" fill="currentColor"/><path d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" strokeWidth="16" className="draw-line"/><path d="M88,72V64a40,40,0,0,1,80,0v8Z" strokeWidth="16" className="draw-line"/></>,
};

export const ClipboardIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
