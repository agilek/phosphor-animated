import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M60,136a20,20,0,0,1-4-39.6V96a72,72,0,0,1,144,0v.4a20,20,0,0,1-4,39.6Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M56,96a72,72,0,0,1,144,0v8a16,16,0,0,1,0,32H56a16,16,0,0,1,0-32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M192.07,136,135,236a8,8,0,0,1-13.9,0L63.93,136" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const IceCreamIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
