import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 176 72 176 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 176 72 176 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 176 72 176 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 176 72 176 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 176 72 176 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M72,128H96v24a32,32,0,0,1-64,0V104A32,32,0,0,1,64,72c14.91,0,28.45,10.2,32,24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const GifIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
