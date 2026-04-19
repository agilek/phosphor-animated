import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,216H80a16,16,0,0,1-16-16V104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,40H176a16,16,0,0,1,16,16v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 192 200 216 176 240" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 16 56 40 80 64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M200,216H80a16,16,0,0,1-16-16V104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,40H176a16,16,0,0,1,16,16v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 192 200 216 176 240" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 16 56 40 80 64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M200,216H80a16,16,0,0,1-16-16V104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,40H176a16,16,0,0,1,16,16v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 192 200 216 176 240" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 16 56 40 80 64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M200,216H80a16,16,0,0,1-16-16V108" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,40H176a16,16,0,0,1,16,16v92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 192 200 216 176 240" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 16 56 40 80 64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M200,216H80a16,16,0,0,1-16-16V104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,40H176a16,16,0,0,1,16,16v96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="176 192 200 216 176 240" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 16 56 40 80 64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const DeviceRotateIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
