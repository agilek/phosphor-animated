import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M184,32H72A40,40,0,0,0,32,72V192a40,40,0,0,0,40,40h88a8,8,0,0,0,0-16H72a24,24,0,0,1-24-24v-8H184a40,40,0,0,0,40-40V72A40,40,0,0,0,184,32Zm0,104a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a16,16,0,0,0-32,0v32a8,8,0,0,1-16,0V104a32,32,0,0,1,56-21.13A32,32,0,0,1,184,104Z" fill="currentColor"/></>,
  duotone: <><path d="M40,72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40Z" opacity="0.2" fill="currentColor"/><path d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,136V104a24,24,0,0,0-48,0v32" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M176,136V104a24,24,0,0,0-48,0" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const MastodonLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
