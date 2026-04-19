import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,200.87A22.12,22.12,0,0,1,64,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,224h80a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M80,200.87A22.12,22.12,0,0,1,64,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,224h80a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M80,200.87A22.12,22.12,0,0,1,64,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,224h80a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="148 32 148 92 208 92" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M124,224h76a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v68" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76,200.87A22.12,22.12,0,0,1,60,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M80,200.87A22.12,22.12,0,0,1,64,208c-13.26,0-24-12.54-24-28s10.74-28,24-28a22.12,22.12,0,0,1,16,7.13" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,224h80a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 32 152 88 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FileCIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
