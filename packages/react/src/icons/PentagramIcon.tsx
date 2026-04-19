import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const PentagramIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
