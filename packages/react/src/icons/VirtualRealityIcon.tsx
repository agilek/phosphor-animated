import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="68 96 92 160 116 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="8" y="56" width="240" height="144" rx="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M144,136h20a20,20,0,0,0,0-40H144v64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="68 96 92 160 116 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="8" y="56" width="240" height="144" rx="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M144,136h20a20,20,0,0,0,0-40H144v64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="68 96 92 160 116 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="8" y="56" width="240" height="144" rx="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M144,136h20a20,20,0,0,0,0-40H144v64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="68 100 92 156 116 100" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="12" y="56" width="232" height="144" rx="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M148,140h20a20,20,0,0,0,0-40H148v56" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="68 96 92 160 116 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="8" y="56" width="240" height="144" rx="72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M144,136h20a20,20,0,0,0,0-40H144v64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const VirtualRealityIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
