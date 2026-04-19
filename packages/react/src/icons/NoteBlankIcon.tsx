import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.27" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.27" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 155.99 156 155.99 156 215.28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NoteBlankIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
