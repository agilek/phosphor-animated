import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="188" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="188" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="188" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="188" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="92" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="188" cy="204" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ShoppingCartIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
