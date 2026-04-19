import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,144a40,40,0,1,0,72,24h88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M32,144a40,40,0,1,0,72,24h88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M32,144a40,40,0,1,0,72,24h88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M24.8,148A44,44,0,1,0,108,168h84" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M196,211.82a44,44,0,1,0-27.06-81.3L128,64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M167.2,44a44,44,0,1,0-62.26,57.48L64,168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,144a40,40,0,1,0,72,24h88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const WebhooksLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
