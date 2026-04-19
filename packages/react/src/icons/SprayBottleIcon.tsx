import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M72,72H200a48,48,0,0,0-48-48H80a8,8,0,0,0-8,8V80a32,32,0,0,1-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,72h0a263.14,263.14,0,0,1,40,139.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M72,72H200a48,48,0,0,0-48-48H80a8,8,0,0,0-8,8V80a32,32,0,0,1-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,72h0a263.14,263.14,0,0,1,40,139.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M72,72H200a48,48,0,0,0-48-48H80a8,8,0,0,0-8,8V80a32,32,0,0,1-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,72h0a263.14,263.14,0,0,1,40,139.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M72,72H200a48,48,0,0,0-48-48H80a8,8,0,0,0-8,8V80a32,32,0,0,1-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,72h0a263.14,263.14,0,0,1,40,139.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M72,72H200a48,48,0,0,0-48-48H80a8,8,0,0,0-8,8V80a32,32,0,0,1-32,32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,72h0a263.14,263.14,0,0,1,40,139.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SprayBottleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
