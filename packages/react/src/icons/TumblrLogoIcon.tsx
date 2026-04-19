import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M192,184v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40H144v56a16,16,0,0,0,16,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M192,184v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40H144v56a16,16,0,0,0,16,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M192,184v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40H144v56a16,16,0,0,0,16,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M192,184v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40H144v56a16,16,0,0,0,16,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M192,184v48H152a56,56,0,0,1-56-56V112H64V72h0a48,48,0,0,0,48-48h32V72h48v40H144v56a16,16,0,0,0,16,16Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const TumblrLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
