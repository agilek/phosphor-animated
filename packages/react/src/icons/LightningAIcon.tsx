import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="127.2 24 112 88 168 113.14 72.8 216 88 152 32 126.86 127.2 24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 216 196 144 160 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LightningAIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
