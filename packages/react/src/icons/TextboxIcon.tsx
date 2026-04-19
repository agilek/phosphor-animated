import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,72h80a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,72h88a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112,184H24a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const TextboxIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
