import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M63,138.93A64.12,64.12,0,0,1,25.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,152,80c0,1,0,2-.07,3" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M63,138.93A64.12,64.12,0,0,1,25.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,152,80c0,1,0,2-.07,3" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M63,138.93A64.12,64.12,0,0,1,25.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,152,80c0,1,0,2-.07,3" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64.38,137.75A64.14,64.14,0,0,1,29.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,156,80c0,.63,0,1.27,0,1.9" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M63,138.93A64.12,64.12,0,0,1,25.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,152,80c0,1,0,2-.07,3" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CloudMoonIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
