import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M240,168l-16,16s-36,40-96,40-96-40-96-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 240 168 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="124" cy="132" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,176V84A44,44,0,0,0,84.8,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M240,168l-16,16s-36,40-96,40-96-40-96-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 240 168 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="124" cy="132" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,176V84A44,44,0,0,0,84.8,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="208 168 240 168 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="124" cy="132" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M240,168l-16,16s-36,40-96,40-96-40-96-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,176V84A44,44,0,0,0,84.8,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M240,168l-16,16s-36,40-96,40-96-40-96-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 240 168 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="124" cy="132" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,176V84A44,44,0,0,0,87.12,60" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M240,168l-16,16s-36,40-96,40-96-40-96-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 240 168 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="124" cy="132" r="44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,176V84A44,44,0,0,0,84.8,64" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const AmazonLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
