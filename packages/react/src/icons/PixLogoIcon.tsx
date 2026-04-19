import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="52.71 96 96 96 160 160 203.29 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="203.29 96 160 96 96 160 52.71 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="52.71 96 96 96 160 160 203.29 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="203.29 96 160 96 96 160 52.71 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="52.71 96 96 96 160 160 203.29 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="203.29 96 160 96 96 160 52.71 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="52.71 96 96 96 160 160 203.29 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="203.29 96 160 96 96 160 52.71 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="52.13" y="52.13" width="151.73" height="151.73" rx="7.95" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="52.71 96 96 96 160 160 203.29 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="203.29 96 160 96 96 160 52.71 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PixLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
