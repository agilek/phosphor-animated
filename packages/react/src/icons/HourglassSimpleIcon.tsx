import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M211.31,196.69A16,16,0,0,1,200,224H56a16,16,0,0,1-11.32-27.31,1.59,1.59,0,0,0,.13-.13L116.43,128,44.82,59.44a1.59,1.59,0,0,0-.13-.13A16,16,0,0,1,56,32H200a16,16,0,0,1,11.32,27.31,1.59,1.59,0,0,0-.13.13L139.57,128l71.61,68.56A1.59,1.59,0,0,0,211.31,196.69Z" fill="currentColor"/></>,
  duotone: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" opacity="0.2" fill="currentColor"/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" opacity="0.2" fill="currentColor"/><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const HourglassSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
