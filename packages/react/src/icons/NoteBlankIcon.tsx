import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.27" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.28" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.27" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 155.99 156 155.99 156 215.28" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H156.69A15.86,15.86,0,0,0,168,219.31L219.31,168A15.86,15.86,0,0,0,224,156.69V48A16,16,0,0,0,208,32ZM160,204.69V160h44.69Z" fill="currentColor"/></>,
  duotone: <><polygon points="216 160 160 160 160 216 216 160" opacity="0.2" fill="currentColor"/><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="215.28 159.99 160 159.99 160 215.28" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NoteBlankIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
