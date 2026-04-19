import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56.44,160a73,73,0,0,1-.44-8,72.06,72.06,0,0,1,95-68.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M220.62,104.64a104.38,104.38,0,0,1,5.48,82,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.68,103.68,0,0,1,46.4,11.38" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56.44,160a73,73,0,0,1-.44-8,72.06,72.06,0,0,1,95-68.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M220.62,104.64a104.38,104.38,0,0,1,5.48,82,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.68,103.68,0,0,1,46.4,11.38" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56.44,160a73,73,0,0,1-.44-8,72.06,72.06,0,0,1,95-68.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M220.62,104.64a104.38,104.38,0,0,1,5.48,82,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.68,103.68,0,0,1,46.4,11.38" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M64,152a64,64,0,0,1,64-64,65.75,65.75,0,0,1,7.05.38" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224.19,112.38a104.48,104.48,0,0,1,1.91,74.25,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.77,103.77,0,0,1,38.66,7.81" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56.44,160a73,73,0,0,1-.44-8,72.06,72.06,0,0,1,95-68.25" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M220.62,104.64a104.38,104.38,0,0,1,5.48,82,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.68,103.68,0,0,1,46.4,11.38" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SpeedometerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
