import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176a40,40,0,1,1,8-24H160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176a40,40,0,1,1,8-24H160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176a40,40,0,1,1,8-24H160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M32,124H90a34,34,0,0,1,0,68H32V64H86a30,30,0,0,1,0,60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M217.45,188A40,40,0,1,1,240,152H160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M232,176a40,40,0,1,1,8-24H160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const BehanceLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
