import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,80h31.37L90.83,158.33A48,48,0,0,1,128,80Zm96-32V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.27,58a8,8,0,0,0-11.29.75L173.37,64H128A64,64,0,0,0,80.19,170.49L66,186.73a8,8,0,0,0,12,10.54L92.22,181A63.62,63.62,0,0,0,128,192h48a8,8,0,0,0,0-16H128a47.63,47.63,0,0,1-25.13-7.13L190,69.27A8,8,0,0,0,189.27,58Z" fill="currentColor"/></>,
  duotone: <><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,48H128a80,80,0,0,0-80,80h0a80,80,0,0,0,80,80h72" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NotSubsetOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
