import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M120,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,120,128h96v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H121.19" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M120,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,120,128h96v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H121.19" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M120,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,120,128h96v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H121.19" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M116,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,116,128H216v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H117.19" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M120,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,120,128h96v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H121.19" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FootballHelmetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
