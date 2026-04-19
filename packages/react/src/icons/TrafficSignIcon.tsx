import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,152v-8a24,24,0,0,1,24-24h56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="46.3" y="46.3" width="163.41" height="163.41" rx="8.56" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="144 96 168 120 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M88,152v-8a24,24,0,0,1,24-24h56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="46.3" y="46.3" width="163.41" height="163.41" rx="8.56" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="144 96 168 120 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M88,152v-8a24,24,0,0,1,24-24h56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="46.3" y="46.3" width="163.41" height="163.41" rx="8.56" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="144 96 168 120 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M88,148v-4a24,24,0,0,1,24-24h56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="46.3" y="46.3" width="163.41" height="163.41" rx="8.56" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="144 96 168 120 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M88,152v-8a24,24,0,0,1,24-24h56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="46.3" y="46.3" width="163.41" height="163.41" rx="8.56" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="144 96 168 120 144 144" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TrafficSignIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
