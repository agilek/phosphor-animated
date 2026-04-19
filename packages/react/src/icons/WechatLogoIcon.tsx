import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const WechatLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
