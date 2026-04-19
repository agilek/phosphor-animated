import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="64" width="208" height="128" rx="16" transform="translate(256) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const DeviceMobileSpeakerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
