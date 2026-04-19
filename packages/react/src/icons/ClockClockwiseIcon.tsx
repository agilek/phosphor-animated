import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="184 104 224 104 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23C202,77.69,211.72,88.93,224,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="184 104 224 104 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23C202,77.69,211.72,88.93,224,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="184 104 224 104 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23C202,77.69,211.72,88.93,224,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="184 104 224 104 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23C202,77.69,211.72,88.93,224,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="128 80 128 128 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="184 104 224 104 224 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M188.4,192a88,88,0,1,1,1.83-126.23C202,77.69,211.72,88.93,224,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ClockClockwiseIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
