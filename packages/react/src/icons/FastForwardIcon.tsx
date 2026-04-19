import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L52.18,65.26A7.91,7.91,0,0,0,40,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L156.18,65.26A7.91,7.91,0,0,0,144,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M40,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L52.18,65.26A7.91,7.91,0,0,0,40,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L156.18,65.26A7.91,7.91,0,0,0,144,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M40,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L52.18,65.26A7.91,7.91,0,0,0,40,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L156.18,65.26A7.91,7.91,0,0,0,144,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M36,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L48.18,65.26A7.91,7.91,0,0,0,36,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M140,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L152.18,65.26A7.91,7.91,0,0,0,140,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L52.18,65.26A7.91,7.91,0,0,0,40,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L156.18,65.26A7.91,7.91,0,0,0,144,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FastForwardIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
