import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,128c40,64,88,64,88,64s48,0,88-64a32,32,0,0,1,0,64H40a32,32,0,0,1,0-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M65.47,160.18,85.54,54.53A8,8,0,0,1,98.4,49.76L123,70.25a8,8,0,0,0,10,0l24.6-20.49a8,8,0,0,1,12.86,4.77l20.07,105.65" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M40,128c40,64,88,64,88,64s48,0,88-64a32,32,0,0,1,0,64H40a32,32,0,0,1,0-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M65.47,160.18,85.54,54.53A8,8,0,0,1,98.4,49.76L123,70.25a8,8,0,0,0,10,0l24.6-20.49a8,8,0,0,1,12.86,4.77l20.07,105.65" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M40,128c40,64,88,64,88,64s48,0,88-64a32,32,0,0,1,0,64H40a32,32,0,0,1,0-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M65.47,160.18,85.54,54.53A8,8,0,0,1,98.4,49.76L123,70.25a8,8,0,0,0,10,0l24.6-20.49a8,8,0,0,1,12.86,4.77l20.07,105.65" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M44,128c40,64,84,64,84,64s44,0,84-64a32,32,0,0,1,0,64H44a32,32,0,0,1,0-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M66.05,157.08,85.54,54.53A8,8,0,0,1,98.4,49.76L123,70.25a8,8,0,0,0,10,0l24.6-20.49a8,8,0,0,1,12.86,4.77L190,157.08" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,128c40,64,88,64,88,64s48,0,88-64a32,32,0,0,1,0,64H40a32,32,0,0,1,0-64Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M65.47,160.18,85.54,54.53A8,8,0,0,1,98.4,49.76L123,70.25a8,8,0,0,0,10,0l24.6-20.49a8,8,0,0,1,12.86,4.77l20.07,105.65" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CowboyHatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
