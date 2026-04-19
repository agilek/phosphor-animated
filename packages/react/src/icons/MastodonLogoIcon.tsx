import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MastodonLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
